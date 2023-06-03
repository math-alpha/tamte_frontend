<template>
    <v-container>
        <v-card>
            <v-card-title>Achievement</v-card-title>
            <v-card-subtitle>This marks your progress contributing community work</v-card-subtitle>
            <v-container>
                <v-row>
                    <v-col cols="6" lg="6" md="6" sm="12">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Task type</th>
                                        <th class="text-left">Contributions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>POS tagging</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>POS verification</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>Names</td>
                                        <td>7</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                    <v-col cols="6" lg="6" md="6" sm="12">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Task type</th>
                                        <th class="text-left">Contributions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Translation validation</td>
                                        <td>76</td>
                                    </tr>
                                    <tr>
                                        <td>Translation</td>
                                        <td>30</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Achievements'
}
</script>

<style scoped></style>
