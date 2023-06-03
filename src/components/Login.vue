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
                                        <h1 style="font-size: 48px; font-weight: 400">
                                            Hello there,
                                        </h1>
                                        <p style="font-size: 16px; font-weight: 300">
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered al teration in
                                            some form, by injected humour, or randomised words which
                                            don't look even slightly believable.
                                        </p>
                                        <v-btn outlined color="white" rounded to="/auth/register">
                                            Register
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                        <v-col cols="7" style="color: midnightblue">
                            <v-container style="text-align: center">
                                <h1 style="font-size: 48px; font-weight: 400">Login</h1>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    style="width: 80%; margin: auto"
                                >
                                    <v-text-field
                                        v-model="name"
                                        :counter="10"
                                        :rules="nameRules"
                                        label="Name"
                                        required
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="E-mail"
                                        required
                                    ></v-text-field>

                                    <v-select
                                        v-model="select"
                                        :items="items"
                                        :rules="[(v) => !!v || 'Item is required']"
                                        label="Item"
                                        required
                                    ></v-select>

                                    <v-checkbox
                                        v-model="checkbox"
                                        :rules="[(v) => !!v || 'You must agree to continue!']"
                                        label="Remember me"
                                        required
                                    ></v-checkbox>

                                    <v-row class="ma-8">
                                        <v-btn
                                            :disabled="!valid"
                                            color="#191970"
                                            class="mr-2"
                                            @click="validate"
                                            style="color: white"
                                        >
                                            Validate
                                        </v-btn>

                                        <v-btn
                                            v-if="false"
                                            color="error"
                                            @click="reset"
                                            class="mr-2"
                                        >
                                            Reset Form
                                        </v-btn>

                                        <v-btn
                                            v-if="false"
                                            color="warning"
                                            @click="resetValidation"
                                            class="mr-2"
                                        >
                                            Reset Validation
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
    name: 'Login',
    components: {},
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            (v) => !!v || 'Name is required',
            (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        select: null,
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        checkbox: false
    }),
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        }
    }
}
</script>

<style scoped></style>
