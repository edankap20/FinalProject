<template>
    <main>
        <section class="text-center">
            <div class="p-5 bg-image" id="bg-image"></div>
            <div class="card mx-4 mx-md-5 shadow" id="card">
                <div class="card-body py-5 px-md-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-7">
                            <h2 class="fw-bold mb-5">Sign In</h2>

                            <form class="needs-validation was-validated" novalidate>
                                <div class="form-outline mb-4">
                                    <input type="email" id="email" class="form-control" v-model="email" required />
                                    <label class="form-label" for="email">Email address</label>
                                    <div class="invalid-feedback">Please provide a valid Email.</div>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="password" class="form-control" v-model="password" required />
                                    <label class="form-label" for="password">Password</label>
                                </div>

                                <button type="button" class="btn btn-primary btn-block mb-4" @click.prevent="_handleSignIn">
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/user.js'
/* import FooterStick from '@/components/FooterStick.vue'; */
export default {
    name: 'SignInView',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    /*     components: {
                FooterStick,
            }, */
    computed: {
        ...mapState(userStore, ['user'])
    },
    methods: {
        ...mapActions(userStore, ['signIn']),
        async _handleSignIn() {
            try {
                const userData = {
                    email: this.email,
                    password: this.password
                }
                await this.signIn(userData)
                this.$router.push({ name: 'home' })
            } catch (err) {
                console.error(err)
            }
        }
    }
}
</script>

<style scoped>
main {
    height: calc(100% - 185px);
}

#card {
    margin-top: -170px;
    background: hsla(0, 0%, 100%, 0.8);
    backdrop-filter: blur(30px);
}

#bg-image {
    background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
    height: 300px;
    background-position: center;
    background-size: cover;
}

@media (min-width: 1024px) {
    #bg-image {
        margin-top: 0px;
    }

    #card {
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
    }

    #footer-botton {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0;
        padding: 0;
        width: 100%;
    }
}
</style>
