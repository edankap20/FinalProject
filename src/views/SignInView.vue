<template>
    <!-- Section: Design Block -->
    <section class="text-center">
        <!-- Background image -->
        <div class="p-5 bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 300px;
        width: auto;
        "></div>
        <!-- Background image -->

        <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
            <div class="card-body py-5 px-md-5">

                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="fw-bold mb-5">Sign In</h2>
                        <form>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" id="email" class="form-control" v-model="email">
                                <label class="form-label" for="email">Email address</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <input type="password" id="password" class="form-control" v-model="password">
                                <label class="form-label" for="password">Password</label>
                            </div>

                            <!-- Submit button -->
                            <button type="button" class="btn btn-primary btn-block mb-4" @click.prevent="_handleSignIn">
                                Sign in
                            </button>
                            <!-- Register buttons -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>





<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user.js';

export default {
    name: 'SignInView',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapState(userStore, ['user']),
    },
    methods: {
        ...mapActions(userStore, ['signIn']),
        async _handleSignIn() {
            try {
                const userData = {
                    email: this.email,
                    password: this.password,
                };
                await this.signIn(userData);
                this.$router.push({ name: 'home' })
            } catch (err) {
                console.error(err)
            }
        },
    }
}
</script>

<style></style>