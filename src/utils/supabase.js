import { createClient } from '@supabase/supabase-js';

// Para a primeira base
export const supabase1 = createClient(
  'https://wqhhsecttjtiutlqldyr.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaGhzZWN0dGp0aXV0bHFsZHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1MzQ1NzUsImV4cCI6MjA0NTExMDU3NX0.iU7BRGBi2n4iA41BJSEPhVdY5ZUbncMX9z0IlnbVLk8'
);

// Para a segunda base
export const supabase2 = createClient(
  'https://eyawxdlfkapuievsdsvo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5YXd4ZGxma2FwdWlldnNkc3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMzY2OTQsImV4cCI6MjA0NTcxMjY5NH0.YxLaXpa8QRNLBuw14TeJsEG_kxl5JLiml46iGoiUbKs'
);
