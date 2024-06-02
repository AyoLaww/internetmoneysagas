import { createClient } from "@supabase/supabase-js"

const supabaseURL: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseURL, supabaseKey)