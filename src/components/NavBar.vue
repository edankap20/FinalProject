<template>
    <div>
        <nav id="laptop-view" class="navbar sticky-top navbar-expand-xxl  navbar-light bg-light">
            <router-link class="nav-link" @click="closeMenu" style="font-size: 2em" to="/">Home</router-link>
            <div class="ml-auto d-xxl-flex align-items-center" id="lista">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <router-link v-if="!user" class="nav-link" @click="closeMenu" to="/auth/sign-in">Sign
                            In</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="!user" class="nav-link" @click="closeMenu" to="/auth/sign-up">Sign
                            Up</router-link>
                    </li>
                </ul>
            </div>
            <button v-if="!user" class="navbar-toggler" type="button" @click="toggleMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div v-if="!user" class="collapse navbar-collapse ml-4" :class="{ show: menuOpen }">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" @click="closeMenu" to="/auth/sign-in">Sign In</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" @click="closeMenu" to="/auth/sign-up">Sign Up</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<script>
import userStore from '@/stores/user.js';
import { mapState } from 'pinia';
export default {
    name: 'NavBar',
    data() {
        return {
            menuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        },
        closeMenu() {
            this.menuOpen = false
        },
    },
    computed: {
        ...mapState(userStore, ['user']),
    },
}
</script>


<style>
.nav-link {
    margin-right: 2em;
}

@media (max-width: 425px) {
    .navbar-nav {
        flex-direction: column;
    }

    .nav-item {
        margin-bottom: .5rem;
    }

    .collapse .nav-link {
        margin-left: 1em;
    }

    .collapse {
        display: none;
    }

    .collapse.show {
        display: block;
    }

    #lista {
        display: none;
    }
}

@media (min-width: 426px) {
    .navbar-nav {
        margin-left: auto;
        flex-direction: row;
    }

    .nav-link {
        margin-right: 2em;
    }

    .navbar-toggler {
        display: none;
    }
}

@media (min-width: 1024px) {
    .nav-link {
        margin-left: 2em;
    }

    .navbar-nav {
        margin-right: 3rem;
    }
}
</style>