<template>
    <main>
        <section class="text-center">
            <div class="p-5 bg-image" id="bg-image"></div>
            <div class="card mx-4 mx-md-5 shadow" id="card">
                <div class="card-body py-5 px-md-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-7">
                            <h2 class="fw-bold mb-5">Sign In</h2>

                            <!-- Muy importante trabajar con @submit.preven en lugar de @click.prevent pues 
                                sino no funciona handleSignIn. Además esté evento tiene que estar en 
                                "form" sino tampoco funciona para la validación de formularios con Bootstrap5 -->
                            <form class="needs-validation" novalidate @submit.prevent="_handleSignIn">
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="email">Email address</label>
                                    <input type="email" id="email" class="form-control" v-model="email" required />
                                    <div class="invalid-feedback">Please provide a valid Email.</div>
                                </div>

                                <div class="form-outline mb-4">
                                    <label class="form-label" for="password">Password</label>
                                    <input type="password" id="password" class="form-control" v-model="password" required />
                                    <div class="invalid-feedback">Please provide a valid Password.</div>
                                </div>

                                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                                <div v-if="showInvalidCredentials" class="alert alert-danger" role="alert">
                                    Invalid credentials. Please try again.
                                </div>
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
export default {
    name: 'SignInView',
    data() {
        return {
            email: '',
            password: '',
            showInvalidCredentials: false
        }
    },
    computed: {
        ...mapState(userStore, ['user'])
    },
    methods: {
        ...mapActions(userStore, ['signIn']),
        async _handleSignIn() {
            if (this.email && this.password) {
                try {
                    const userData = {
                        email: this.email,
                        password: this.password
                    }
                    await this.signIn(userData)
                    this.$router.push({ name: 'home' })
                } catch (err) {
                    console.error(err)
                    /*  alert('Invalid Credentials') */
                    this.showInvalidCredentials = true
                    this.clearFormFields()
                }
            }
        },
        clearFormFields() {
            this.email = ''
            this.password = ''
        }
    },
    mounted() {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        ; (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms).forEach(function (form) {
                form.addEventListener(
                    'submit',
                    function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                        form.classList.add('was-validated')
                    },
                    false
                )
            })
        })()
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
