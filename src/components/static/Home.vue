<script>
export default {
    name: 'Home',
    components: {}
}
</script>

<template>
    <v-main>
        <div class="home">
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-container fill-height fluid md="12" sm="12" cols="12" style="width: 80%">
                        <v-row align="center" justify="center">
                            <v-col>
                                <h1 style="font-size: 48px; font-weight: 400">
                                    Amazing illustration for your project
                                </h1>
                                <p style="font-size: 16px; font-weight: 300">
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered al teration in some form, by
                                    injected humour, or randomised words which don't look even
                                    slightly believable.
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-img width="100%" src={@/assets/wfh_8.svg} />
                    <about />
                </v-col>
            </v-row>
            <v-container>
                <v-divider></v-divider>
            </v-container>
        </div>
        <div class="home">
            <v-container>
                <v-row style="border-bottom: 1px solid darkgray">
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-container fill-height fluid md="12" sm="12" cols="12" style="width: 80%">
                            <v-row align="center" justify="center">
                                <v-col>
                                    <h1 style="font-size: 48px; font-weight: 400">
                                        Amazing illustration for your project
                                    </h1>
                                    <p style="font-size: 16px; font-weight: 300">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered al teration in
                                        some form, by injected humour, or randomised words which
                                        don't look even slightly believable.
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-img src="../../assets/wfh_8.svg" />
                        <about />
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="home">
            <v-container>
                <v-row style="border-bottom: 1px solid darkgray">
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-container fill-height fluid md="12" sm="12" cols="12" style="width: 80%">
                            <v-row align="center" justify="center">
                                <v-col>
                                    <h1 style="font-size: 48px; font-weight: 400">
                                        Amazing illustration for your project
                                    </h1>
                                    <p style="font-size: 16px; font-weight: 300">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered al teration in
                                        some form, by injected humour, or randomised words which
                                        don't look even slightly believable.
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6">
                        <v-img src="../../assets/wfh_8.svg" />
                        <about />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-main>
</template>
