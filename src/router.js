import {createRouter, createWebHistory} from "vue-router";
// import TheComponentOne from "./components/TheComponentOne.vue"
import LoginPage from "@/components/LoginPage.vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: LoginPage},
        {path: '/hw', component: HelloWorld},
    ]
})
