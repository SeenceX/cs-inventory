<template>
    <table class="inventory">
        <tr class="table-head">
            <th id="image"></th>
            <th id="name">Название</th>
            <th id="count">Количество</th>
            <th id="init-price">Цена покупки</th>
            <th id="current-price">Текущая цена</th>
            <th id="i-profit">Прибыль</th>
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
