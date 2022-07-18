<template>

    <div>

        <h1>

            Custom Input

        </h1>

        <input type="text" v-model="modelValue" @input="updateValue">

    </div>

</template>

 

<script setup>

const props = defineProps({

    modelValue: {

        type: String,

        default: ""

    }

});

const emit = defineEmits(["update:modelValue"]);

function updateValue(e) {

    emit('update:modelValue', e.target.value);

};

</script>