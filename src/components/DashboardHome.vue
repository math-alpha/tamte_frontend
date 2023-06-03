<script>
export default {
    name: 'DashboardHome',
    data: () => ({
        skill: 20,
        knowledge: 33,
        power: 58
    })
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" md="8">
                <h1>Hello World</h1>
            </v-col>
            <v-col cols="6" md="4">
                <v-card outlined>
                    <v-container>
                        <v-row no-gutters>
                            <v-col justify="space-around" cols="3">
                                <v-avatar color="orange" size="58">
                                    <span class="white--text headline">58</span>
                                </v-avatar>
                            </v-col>
                            <v-col cols="9">
                                <v-row no-gutters>
                                    <p>Level {{ power / 10 }}</p>
                                    <v-spacer></v-spacer>
                                    <p>304/400</p>
                                </v-row>
                                <v-row no-gutters>
                                    <v-progress-linear
                                        v-model="power"
                                        color="orange"
                                        height="8"
                                        rounded
                                    ></v-progress-linear>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-for="n in 3" :key="n" :class="'my-2'">
            <v-col v-for="k in 3" :key="k">
                <v-card class="pa-2 grey lighten-5" outlined elevation="4">
                    <v-card-title>Sample task</v-card-title>
                    <v-card-subtitle>Subtitle</v-card-subtitle>
                    {{ k }} of {{ 3 }}
                    <v-card-text
                        >Greyhound divisively hello coldly wonderfully marginally far upon
                        excluding.</v-card-text
                    >
                    <v-card-actions>
                        <v-btn color="darkblue" text> Share </v-btn>

                        <v-btn color="darkblue" text> Explore </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
