<template>
    <tr class="item">
        <td id="item-img">
            <img :src="item.itemImg" alt=""/>
        </td>
        <td id="item-name">{{item.itemName}}</td>
        <td id="item-count">{{item.itemCount}}</td>
        <td id="init-price">{{item.itemInitPrice}}</td>
        <td id="current-price">{{item.itemCurrentPrice}}</td>
        <td id="profit">{{ getItemProfit }}</td>
    </tr>

</template>

<script>
export default {
    name: "InventoryItem",
    props:{
        item:{
            type: Object,
            require: false,
        }
    },
    computed: {
        getItemProfit(){
            const profit = this.item.itemCount * (this.item.itemCurrentPrice - this.item.itemInitPrice);
            if (profit >= 0){
                return `+${profit}`
            }
            return `${profit}`
        }
    }
}
</script>

<style scoped>

</style>
