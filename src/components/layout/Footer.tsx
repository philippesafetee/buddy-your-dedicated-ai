import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { href: "/fonctionnement", label: "Fonctionnement" },
    { href: "/tarification", label: "Tarification" },
    { href: "/a-propos", label: "À propos" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/cgu", label: "CGU" },
    { href: "/confidentialite", label: "Politique de confidentialité" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt=""
                className="h-8 w-8 shrink-0 object-contain"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-foreground">Buddy</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Déployez des IA dédiées par client. Propulsé par{" "}
              <a
                href="https://openclaw.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                OpenClaw
              </a>
              .
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Buddy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
