import { createClient } from "@supabase/supabase-js";
import assert from "node:assert";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

assert(supabaseUrl, "NEXT_PUBLIC_SUPABASE_URL must be defined")
assert(supabaseKey, "NEXT_PUBLIC_SUPABASE_ANON_KEY must be defined")

const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }