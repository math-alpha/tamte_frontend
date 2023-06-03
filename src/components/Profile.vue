<template>
    <v-container>
        <v-container>
            <v-row>
                <h1>Your Profile</h1>
            </v-row>
            <br />
            <br />
            <v-col>
                <v-row align="center" justify="center">
                    <v-hover>
                        <v-avatar size="102">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                        </v-avatar>
                    </v-hover>
                    <v-col>
                        <v-btn>Change picture</v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <br />
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        label="First Name"
                        placeholder="Enter your first name"
                        solo
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        label="Last Name"
                        placeholder="Your last name"
                        solo
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        label="Display name"
                        placeholder="Name to be displayed on the website"
                        solo
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        label="Email"
                        placeholder="Enter your new email address"
                        hint="Verified"
                        solo
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Phone" placeholder="Your phone number" solo></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        label="Country"
                        placeholder="Your country of origin"
                        solo
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12" lg="6" sm="12">
                    <v-textarea
                        solo
                        label="About You"
                        hint="This is a descriptive text about you"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-btn color="green darken-4"> Update </v-btn>
        </v-container>
        <v-divider></v-divider>
        <v-container>
            <h2>Change Password</h2>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        label="Current Password"
                        placeholder="Current Password"
                        hint="Enter your current password for security reasons."
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        label="New Password"
                        placeholder="New Password"
                        hint="Please use a strong password."
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-btn color="red darken-4"> Change </v-btn>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'Profile'
}
</script>

<style scoped></style>
