<template>
    <div style="height: 1vh">
        <v-main>
            <v-container class="my-16">
                <v-card elevation="2" style="width: 80%; margin: auto">
                    <v-row>
                        <v-col cols="5" style="background-color: midnightblue; color: white">
                            <v-container
                                fill-height
                                fluid
                                md="12"
                                sm="12"
                                cols="12"
                                style="width: 80%"
                            >
                                <v-row align="center" justify="center">
                                    <v-col>
                                        <h1 style="font-size: 48px; font-weight: 400">Oh Sorry,</h1>
                                        <p style="font-size: 16px; font-weight: 300">
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered al teration in
                                            some form, by injected humour, or randomised words which
                                            don't look even slightly believable.
                                        </p>
                                        <v-btn outlined color="white" rounded to="/">
                                            Home page
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                        <v-col cols="7" style="color: midnightblue">
                            <v-container style="text-align: center">
                                <h1 style="font-size: 48px; font-weight: 400">Reset Password</h1>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    style="width: 80%; margin: auto"
                                >
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="E-mail"
                                        required
                                    ></v-text-field>

                                    <v-row class="ma-8">
                                        <v-btn
                                            :disabled="!valid"
                                            style="background-color: midnightblue; color: white"
                                            class="mr-2"
                                            @click="validate"
                                            rounded
                                        >
                                            Send Link
                                        </v-btn>
                                    </v-row>
                                </v-form>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    name: 'ForgotPassword',
    components: {},
    data: () => ({
        valid: true,
        email: '',
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ]
    }),
    methods: {
        validate() {
            this.$refs.form.validate()
        }
    }
}
</script>

<style scoped></style>
