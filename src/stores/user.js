import {defineStore} from "pinia";
import supabase from '@/supabase/index.js';

export default defineStore('user', {
    state: () => {
        return {
            user: null,
        }
    },
    actions: {
       async fetchUser() {
            const { data: { user } } = await supabase.auth.getUser()
            this.user = user
        }
    }
})