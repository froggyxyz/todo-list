<script lang="ts" setup>
import { NButton, NCard, NModal } from 'naive-ui';
import Input from '@/shared/ui/Input.vue';
import { ref } from 'vue';
import { Add16Filled } from '@vicons/fluent';
import { Icon } from '@vicons/utils';

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
        <NCard title="Создание задачи" style="max-width: 600px">
            <form>
                <Input name="name" label="Название" placeholder="Введите название" />
            </form>
        </NCard>
    </NModal>
</template>
