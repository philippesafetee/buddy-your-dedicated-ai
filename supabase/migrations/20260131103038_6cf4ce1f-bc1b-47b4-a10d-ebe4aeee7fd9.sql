-- Allow anyone to insert into the waitlist (no auth required)
CREATE POLICY "Anyone can register to waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);