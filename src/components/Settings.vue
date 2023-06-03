<template>
    <v-container>
        <v-container>
            <h2>Languages</h2>
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Medumba [BYV]" value="byv"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Ghomálá’ [BBJ]"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Fe’fe’ [FMP]"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Eton [ETO]"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Basaa [BAS]"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Ngemba [NGE]"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Lamnso’ [LNS]"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Kom [BKM]"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Fulfulde, Adamawa [FUB]"></v-switch>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4">
                    <v-switch label="Fulfulde, Mbororo [FUV]"></v-switch>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-container>
            <h2>Privacy</h2>
            <br />
            <p>Will you want your profile to be visible by anyone on the platform?</p>
            <v-switch label="" value="public"></v-switch>
        </v-container>
        <v-divider></v-divider>
    </v-container>
</template>

<script>
export default {
    name: 'Settings'
}
</script>

<style scoped></style>
