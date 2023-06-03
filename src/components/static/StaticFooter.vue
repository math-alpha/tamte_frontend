<script>
export default {
    name: 'StaticFooter'
}
</script>

<template>
    <v-footer absolute>
        <v-container>
            <v-row justify="left" no-gutters>
                <span style="font-weight: 400; font-size: 32px; color: #5f6368">Tamte</span>
                <v-btn text class="mx-4 my-1"> Link 1 </v-btn>
                <v-btn text class="mx-4 my-1"> Link 2 </v-btn>
                <v-btn text class="mx-4 my-1"> Link 3 </v-btn>
            </v-row>
            <v-col class="text-center" cols="12">
                &copy; 2019-{{ new Date().getFullYear() }}   <strong> Tàmtə̀ (Tamte)</strong>
            </v-col>
        </v-container>
    </v-footer>
</template>

<style scoped></style>
