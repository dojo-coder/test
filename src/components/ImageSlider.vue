<template>
    <div id="app" class="text-center">
        <img :src="images[currentImage]" width="400" height="500">
        <button @click="previousImage" class="btn btn-primary" :disabled="isPrevDisabled">Previous</button>
        <button @click="nextImage" class="btn btn-primary" :disabled="isNextDisabled">Next</button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
    images: {
        type: Array,
        default: []
    }
});
const isPrevDisabled = computed(() => {
    return currentImage.value === 0
});
const isNextDisabled = computed(() => {
    return currentImage.value === (props.images.length - 1)
});
const currentImage = ref(0);
const nextImage = function(e) {
    if(currentImage.value !== (props.images.length -1))
        currentImage.value++;
};
const previousImage = function(e) {
    if(currentImage.value !== 0)
        currentImage.value--;
};
</script>

<!-- <style>
    .removed {
        color: gray;
    }

    .removed label {
        text-decoration: line-through;
    }
</style> -->