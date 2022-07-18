<template>
    <div id="app">
        <h3>Shopping List</h3>
        <form @submit.prevent="addItem">
            <input type="text" class="form-control" v-model="newItem" name="newItem" placeholder="Add New Item" />
        </form>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in _items" :class="{'removed' : item.checked}">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="item.checked">
                    <label class="form-check-label">
                        {{item.text}}
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        default: []
    }
})
const newItem = ref('');
const _items = reactive(props.items);
const addItem = function() {
    const text = newItem.value.trim();
    if(text) {
        _items.push({text, checked: false});
        newItem.value = ''
    }
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