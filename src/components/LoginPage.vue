<template>
    <navbar-menu></navbar-menu>
    <h1>Login page</h1>
    <form>
        <input type="text"><input type="text"><input type="text">
    </form>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";

export default {
    //components: {},
    name: 'LoginPage',
    components: {NavbarMenu},
    data() {
        return {}
    },
}
</script>

<style scoped>

</style>
