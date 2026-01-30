-- Create waitlist table for early access registrations
CREATE TABLE public.waitlist (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    company_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- No public policies - only service role can access (admin only via Supabase dashboard/edge functions)
-- This means regular users cannot read the data at all

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);