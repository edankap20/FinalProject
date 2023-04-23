
import { createClient } from '@supabase/supabase-js'

const baseUrl = 'https://qvluklkplqwmwrbfbfne.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2bHVrbGtwbHF3bXdyYmZiZm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjk3NjgsImV4cCI6MTk5NjgwNTc2OH0.qd1MnV4T0MO6Y3c_YhH3InopGL7B5_p86QUAlE-uaok';

export default createClient(baseUrl, apiKey)
