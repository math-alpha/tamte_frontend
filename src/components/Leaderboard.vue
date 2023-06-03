<script>
import DashboardHeader from '@/components/DashboardHeader.vue'

export default {
    name: 'Leaderboard',
    components: {
        DashboardHeader
    }
}
</script>

<template>
    <div>
        <DashboardHeader></DashboardHeader>
        <v-main>
            <h1 style="text-align: center">Leaderboard</h1>
            <v-container
                style="width: 40%; height: 80vh; margin: auto; overflow: scroll; overflow-x: hidden"
            >
                <ul>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 1</p>
                                <p style="margin-bottom: 0">509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 2</p>
                                <p style="margin-bottom: 0">509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 3</p>
                                <p>509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 1</p>
                                <p style="margin-bottom: 0">509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 2</p>
                                <p style="margin-bottom: 0">509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 3</p>
                                <p>509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 1</p>
                                <p style="margin-bottom: 0">509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 2</p>
                                <p style="margin-bottom: 0">509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0">Rank 3</p>
                                <p>509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                </ul>
            </v-container>
            <v-container
                style="
                    padding: 0;
                    width: 40%;
                    height: 10vh;
                    margin: auto;
                    overflow: scroll;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    position: fixed;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                "
            >
                <v-card style="width: 100%; height: 100%" elevation="12">
                    <v-container>
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-avatar size="54">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="Your profile image"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p style="margin-bottom: 0"><b>Rank</b> 202</p>
                                <p style="margin-bottom: 0">509 Contributions</p>
                                <p></p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-container>
        </v-main>
    </div>
</template>



<style scoped></style>
