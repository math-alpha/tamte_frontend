<script>
import DashboardHeader from '@/components/DashboardHeader.vue'

export default {
    name: 'Editing',
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


