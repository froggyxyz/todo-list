<script lang="ts" setup>
import { Edit32Filled } from '@vicons/fluent';
import { NButton, NModal, NCard } from 'naive-ui';
import { Icon } from '@vicons/utils';
import { ref } from 'vue';
import Input from '@/shared/ui/Input.vue';

defineProps<{ id: number }>();

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
        <NCard :title="`Редактирование задачи #${id}`" style="max-width: 600px">
            <form>
                <Input name="name" label="Название" placeholder="Введите название" />
            </form>
        </NCard>
    </NModal>
</template>
