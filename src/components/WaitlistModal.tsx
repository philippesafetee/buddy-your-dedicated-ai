import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistModalProps {
  children: React.ReactNode;
}

export function WaitlistModal({ children }: WaitlistModalProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    company_name: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("waitlist").insert({
        email: formData.email,
        company_name: formData.company_name || null,
      });

      if (error) {
        if (error.code === "23505") {
          toast.error("Cet email est déjà inscrit sur la liste d'attente.");
        } else {
          throw error;
        }
      } else {
        const runSuccess = () => {
          toast.success("Merci ! Vous êtes inscrit sur la liste d'attente.");
          setOpen(false);
          setFormData({ email: "", company_name: "" });
        };
        window.gtag?.("event", "generate_lead", {
          method: "waitlist",
        });
        // Google Ads conversion: send event then run success UI in callback (or after 2s timeout)
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion_event_submit_lead_form", {
            event_callback: runSuccess,
            event_timeout: 2000,
          });
        } else {
          runSuccess();
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Rejoindre la liste d'attente
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-2">
            Soyez parmi les premiers à accéder à Buddy. Nous vous contacterons dès que votre accès sera disponible.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email professionnel *</Label>
            <Input
              id="email"
              type="email"
              placeholder="vous@entreprise.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Nom de l'entreprise</Label>
            <Input
              id="company"
              type="text"
              placeholder="Acme Corp (optionnel)"
              value={formData.company_name}
              onChange={(e) =>
                setFormData({ ...formData, company_name: e.target.value })
              }
            />
          </div>
          <Button
            type="submit"
            className="w-full glow-primary"
            disabled={isLoading}
          >
            {isLoading ? "Inscription en cours..." : "S'inscrire"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            En vous inscrivant, vous acceptez nos{" "}
            <a href="/cgu" className="text-primary hover:underline">
              CGU
            </a>{" "}
            et notre{" "}
            <a href="/confidentialite" className="text-primary hover:underline">
              politique de confidentialité
            </a>
            .
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
