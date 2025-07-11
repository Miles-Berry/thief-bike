import { createClient } from '@supabase/supabase-js'
import { SUPABASE_PUBLIC_URL, SUPABASE_PUBLIC_ANON_KEY } from '$env/static/private'
import type { Database } from './database.types'

export const supabase = createClient<Database>(SUPABASE_PUBLIC_URL, SUPABASE_PUBLIC_ANON_KEY)