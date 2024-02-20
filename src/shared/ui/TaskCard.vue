<script lang="ts" setup>
import { NCard, NCheckbox } from 'naive-ui';
import type { ITask } from '@/shared/api/models';
import DeleteTask from '@/features/DeleteTask.vue';
import EditTask from '@/features/EditTask.vue';
import { useTasksStore } from '@/shared/stores';

defineProps<ITask>();

const store = useTasksStore();
const { toggleCompletedTask } = store;
</script>

<template>
    <NCard class="card" size="small">
        <template #header
            >#{{ id }} <span :class="{ stroke: completed }">{{ title }}</span></template
        >
        <template #header-extra>
            <NCheckbox :checked="completed" @click="toggleCompletedTask(id)" />
        </template>
        <template #footer>
            <div class="card__actions">
                <DeleteTask :id />
                <EditTask :id />
            </div>
        </template>
    </NCard>
</template>

<style lang="scss" scoped>
.card {
    width: 100%;

    .stroke {
        text-decoration: line-through;
    }

    &__actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 5px;
    }
}
</style>
