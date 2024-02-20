<script lang="ts" setup>
import { useForm } from 'vee-validate';
import Input from '@/shared/ui/Input.vue';
import { NButton, NCard, useMessage } from 'naive-ui';
import { useTasksStore } from '@/shared/stores';
import { storeToRefs } from 'pinia';

const emit = defineEmits<{ closeModal: [] }>();

const { success } = useMessage();

const store = useTasksStore();
const { addTask } = store;
const { getTasks } = storeToRefs(store);

const validationSchema = {
    title: {
        required: true,
    },
};

const { handleSubmit } = useForm({
    validationSchema,
});

const onSubmit = handleSubmit(({ title }) => {
    const newTaskId = getTasks.value?.[0]?.id + 1;

    addTask({ id: newTaskId, completed: false, title });
    emit('closeModal');
    success(`Задача #${newTaskId} успешно создана`);
});
</script>

<template>
    <NCard title="Создание задачи" style="max-width: 600px">
        <form @submit="onSubmit">
            <Input name="title" label="Название" placeholder="Введите название" />
            <div style="display: flex; justify-content: space-between">
                <NButton @click="emit('closeModal')">Отменить</NButton>
                <NButton type="success" attr-type="submit">Создать</NButton>
            </div>
        </form>
    </NCard>
</template>
