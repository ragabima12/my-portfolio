import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sbxmdkeijkcbuhjkmjcy.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieG1ka2VpamtjYnVoamttamN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzODA0NDIsImV4cCI6MjA2MDk1NjQ0Mn0.ai8qLw_T9QQE0GWSAdPwJSDEfR-zxhRiU7HxEADYhXo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
