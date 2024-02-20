<script lang="ts" setup>
import { Edit32Filled } from '@vicons/fluent';
import { NButton, NModal } from 'naive-ui';
import { Icon } from '@vicons/utils';
import { ref } from 'vue';
import EditTaskForm from '@/widgets/EditTaskForm.vue';

defineProps<{ id: number; title: string }>();

const showModal = ref<boolean>(false);
const toggleShowModal = () => (showModal.value = !showModal.value);
</script>

<template>
    <NButton type="warning" @click="toggleShowModal">
        <Icon size="18">
            <Edit32Filled />
        </Icon>
    </NButton>
    <NModal v-model:show="showModal">
        <EditTaskForm @close-modal="toggleShowModal" :id :title />
    </NModal>
</template>
