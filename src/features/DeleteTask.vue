<script lang="ts" setup>
import { Delete24Filled } from '@vicons/fluent';
import { NButton } from 'naive-ui';
import { Icon } from '@vicons/utils';
import { useTasksStore } from '@/shared/stores';
import { useDialog } from 'naive-ui';
import { useMessage } from 'naive-ui';

const props = defineProps<{ id: number }>();

const dialog = useDialog();
const message = useMessage();

const store = useTasksStore();
const { deleteTask } = store;

const handleDeleteConfirm = () => {
    dialog.warning({
        title: `Удаление задачи #${props.id}`,
        content: 'Вы действительно хотите удалить задачу?',
        positiveText: 'Удалить',
        negativeText: 'Отменить',
        onPositiveClick: () => {
            deleteTask(props.id);
            message.success(`Задача #${props.id} успешно удалена`);
        },
    });
};
</script>

<template>
    <NButton type="error" @click="handleDeleteConfirm">
        <Icon size="18">
            <Delete24Filled />
        </Icon>
    </NButton>
</template>
