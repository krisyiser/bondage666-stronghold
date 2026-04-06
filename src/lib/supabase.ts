import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  category: string;
};

export type Profile = {
  id: string;
  username: string;
  avatar_url: string;
  role: 'admin' | 'fan';
};

export type Order = {
  id: string;
  user_id: string;
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';
  stripe_session_id: string;
  total_amount: number;
  created_at: string;
};
