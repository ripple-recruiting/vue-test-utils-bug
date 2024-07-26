<template>
  <h1>I'm a cool {{ msg }}</h1>
</template>

<script setup lang="ts">
interface Props {
  message: string;
}

defineProps<Props>();
</script>
