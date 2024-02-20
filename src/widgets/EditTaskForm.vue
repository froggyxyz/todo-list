<script lang="ts" setup>
import { NButton, NCard, useMessage } from 'naive-ui';
import Input from '@/shared/ui/Input.vue';
import { useTasksStore } from '@/shared/stores';
import { useForm } from 'vee-validate';
import { toRefs } from 'vue';

const props = defineProps<{ id: number; title: string }>();
const { title } = toRefs(props);
const emit = defineEmits<{ closeModal: [] }>();

const { success } = useMessage();

const store = useTasksStore();
const { editTask } = store;

const validationSchema = {
    title: {
        required: true,
    },
};

const { handleSubmit } = useForm({
    validationSchema,
    initialValues: {
        title: title.value ?? '',
    },
});

const onSubmit = handleSubmit(({ title }) => {
    editTask(props.id, { title });
    emit('closeModal');
    success(`Задача #${props.id} успешно отредактирована`);
});
</script>

<template>
    <NCard :title="`Редактирование задачи #${id}`" style="max-width: 600px">
        <form @submit.prevent="onSubmit">
            <Input name="title" label="Название" placeholder="Введите название" />
            <div style="display: flex; justify-content: space-between">
                <NButton @click="emit('closeModal')">Отменить</NButton>
                <NButton type="success" attr-type="submit">Сохранить</NButton>
            </div>
        </form>
    </NCard>
</template>
