

<template>

    <div>

        <h1>Welcome</h1>

        <img width="150px" alt="Vue" src="../../src/images/vue.png">

        <br />

        <!--Test--->
        <!--<span class="test">Hey dude...</span>-->

        <h2>Webpack 5 configured from scratch to serve Vue.js</h2>
        <image-slider :images="images" />
        <shopping-list :items="items" />
    </div>

</template>

<script setup>
import { ref } from 'vue';
import ImageSlider from './ImageSlider.vue';
import ShoppingList from './ShoppingList.vue';
const images = ref([
    'https://i.imgur.com/mug5Xbe.jpg',
    'https://i.imgur.com/rAFqZiM.jpg',
    'https://i.imgur.com/Fpw5KKY.jpg',
    'https://i.imgur.com/IbYRmoW.jpg',
    'https://i.imgur.com/9poVrgA.jpg'
]);
const items = ref([
    { text: 'Banana', checked: false },
    { text: 'Oranges', checked: false },
    { text: 'Mangoes', checked: false },
]);
</script>

<style scoped>
h2 {
    color: #404040;
}
</style>

