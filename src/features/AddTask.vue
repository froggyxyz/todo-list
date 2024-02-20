<script lang="ts" setup>
import { NButton, NModal } from 'naive-ui';
import { ref } from 'vue';
import { Add16Filled } from '@vicons/fluent';
import { Icon } from '@vicons/utils';
import AddTaskForm from '@/widgets/AddTaskForm.vue';

const showModal = ref<boolean>(false);
const toggleShowModal = () => (showModal.value = !showModal.value);
</script>

<template>
    <NButton @click="toggleShowModal" type="success">
        <Icon size="18">
            <Add16Filled />
        </Icon>
        Создать задачу
    </NButton>
    <NModal v-model:show="showModal">
        <AddTaskForm @close-modal="toggleShowModal" />
    </NModal>
</template>
