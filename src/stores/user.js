import { defineStore } from "pinia";
import supabase from '@/supabase/index.js';

export default defineStore('userStore', {
    state: () => ({
        user: undefined,
    }),

    actions: {
        // para saber si tenemos un usuario que haya iniciado sesión // 
        async fetchUser() {
            const { data: { user } } = await supabase.auth.getUser()
            
            this.user = user;
        },
        //método de crear un nuevo usuario que lo tomo de la doc de SupaBase
        async registerUser( email, password ) {
            const { data: { user }, error } = await supabase.auth.signUp({
                email: email,
                password: password,
          });

          if (error) throw error;
          if (user) this.user = user;
        },
        //método de iniciar sesión que lo tomo de la doc de SupaBase
        async signIn( {email, password}) {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
              });
              if (error) throw error;
              if (data) this.user = data;
        },
        async signOut() {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            this.user = null;
        },
    },
})