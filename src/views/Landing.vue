<script>
import StaticHeader from '@/components/static/StaticHeader.vue'
import StaticFooter from '@/components/static/StaticFooter.vue'

export default {
    name: 'Landing',
    components: { StaticFooter, StaticHeader }
}
</script>

<template>
    <v-app>
        <StaticHeader />
        <router-view></router-view>
        <StaticFooter />
    </v-app>
</template>


