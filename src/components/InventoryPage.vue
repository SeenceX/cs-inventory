<template>
    <div class="container">
        <inventory-table :items="items"/>
    </div>
</template>

<script>
import InventoryTable from "@/components/InventoryPageComponents/InventoryTable.vue";

export default {
    name: "InventoryPage",
    components: {InventoryTable},
    data() {
        return {
            items: [
                {
                    itemImg: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naLOJzgUuYqyzIaIxa6jMOLXxGkHvcMjibmU99Sg3Qaw-hA_ZWrzLISLMlhpgJJUhGE/64fx64f",
                    itemName: "Snakebite case",
                    itemCount: 10,
                    itemInitPrice: 10,
                    itemCurrentPrice: 20,
                },
                {
                    itemImg: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naLOJzgUuYqyzIaIxa6jMOLXxGkHvcMjibmU99Sg3Qaw-hA_ZWrzLISLMlhpgJJUhGE/64fx64f",
                    itemName: "Bravo case",
                    itemCount: 1,
                    itemInitPrice: 10,
                    itemCurrentPrice: 1,
                },
            ]
        }
    }
}
</script>

<style scoped>
    @import "../assets/css/inventory.css";
</style>
