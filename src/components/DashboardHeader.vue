<script>
export default {
    name: 'DashboardHeader',
    date() {
        return {
            loggedIn: true
        }
    }
}
</script>

<template>
    <v-app-bar app color="white" hide-on-scroll>
        <v-toolbar-title>Tamte</v-toolbar-title>

        <v-spacer style="color: darkgrey"></v-spacer>

        <v-spacer></v-spacer>

        <v-icon style="margin-right: 30px" large> mdi-home </v-icon>

        <v-btn v-if="!this.loggedIn" href="/auth/login" target="_blank" color="blue">
            <span class="mr-2">Get Started</span>
        </v-btn>

        <v-btn v-else href="/u/" target="_blank" color="blue">
            <span class="mr-2">Dashboard</span>
        </v-btn>
    </v-app-bar>
</template>

<style scoped></style>
