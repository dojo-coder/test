<template>
	<p class="counter">{{ counter.count }}</p>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

// action call
counter.increment()
</script>
