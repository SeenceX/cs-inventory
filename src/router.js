import {createRouter, createWebHistory} from "vue-router";
// import TheComponentOne from "./components/TheComponentOne.vue"
import HomePage from "@/components/HomePage.vue";
import InventoryPage from "@/components/InventoryPage.vue";
import PageNotFound from "@/components/PageNotFound.vue";
export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/inventory', component: InventoryPage},
        {path: '/:pathMatch(.*)*', component: PageNotFound}
    ]
})
