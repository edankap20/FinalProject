import {defineStore} from "pinia";
import supabase from '@/supabase/index.js';

export default defineStore('userStore', {
    state: () => {
        return {
            user: undefined,
        }
    },
    actions: {
        // para saber si tenemos un usuario que haya iniciado sesión // 
        async fetchUser() {
            const { data: { user } } = await supabase.auth.getUser();
            this.user = user;
            if(!user) throw new Error('El usuario no existe');
            console.log(user);
        },
        //método de crear un nuevo usuario que lo tomo de la doc de SupaBase
        async registerUser( { email, password }) {
            const { data: { user } , error } = await supabase.auth.signUp({
                email,
                password,
          });
          if (error) throw error;
          if (user) this.user = user;
        },
        //método de iniciar sesión que lo tomo de la doc de SupaBase
        async signIn({ email, password}) {
            const { data: { user }, error } = await supabase.auth.signInWithPassword({
                email,
                password,
              });
              if (error) throw error;
              if (user) this.user = user;
        },
        async signOut() {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            this.user = null;
        },
    },
})