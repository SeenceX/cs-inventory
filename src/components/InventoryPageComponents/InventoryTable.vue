<template>
    <table class="inventory">
        <tr class="table-head">
            <th></th>
            <th>Название</th>
            <th>Количество</th>
            <th>Цена покупки</th>
            <th>Текущая цена</th>
            <th>Прибыль</th>
        </tr>

        <tbody>
            <inventory-item v-for="(item, index) in items" :key="index.itemName" :item="item"/>
        </tbody>
    </table>
</template>

<script>
import InventoryItem from "@/components/InventoryPageComponents/InventoryItem.vue";

export default {
    name: "InventoryTable",
    components: {InventoryItem},
    props: {
        items: {
            type: Object,
            required: false,
        },
    },
    data(){
        return {
            item: this.items,
        }
    }
}
</script>

<style scoped>

</style>
