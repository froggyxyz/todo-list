<script setup lang="ts">
import '@/shared/lib/validators';
import { NDialogProvider, NMessageProvider } from 'naive-ui';
import { RouterView } from 'vue-router';
</script>

<template>
    <NDialogProvider>
        <NMessageProvider>
            <RouterView />
        </NMessageProvider>
    </NDialogProvider>
</template>

<style>
@import 'styles/index.scss';
</style>
