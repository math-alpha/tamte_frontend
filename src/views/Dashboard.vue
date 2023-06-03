<script>
import DashboardHeader from '@/components/DashboardHeader.vue'

export default {
    name: 'Dashboard',
    components: { DashboardHeader }
}
</script>

<template>
    <div>
        <dashboard-header></dashboard-header>
        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<style scoped></style>
