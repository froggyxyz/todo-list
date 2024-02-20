<script lang="ts" setup>
import { computed, reactive } from 'vue';
import TaskCard from '@/shared/ui/TaskCard.vue';
import { NPagination } from 'naive-ui';
import type { ITask } from '@/shared/api/models';

const props = defineProps<{ tasks: ITask[] }>();

const pagination = reactive({
    page: 1,
    pageSize: 10,
});

const handleChangePage = (page: number) => (pagination.page = page);

const paginatedTasks = computed(() =>
    props.tasks.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize),
);
</script>

<template>
    <div class="tasks">
        <div class="tasks__list">
            <TaskCard v-for="{ id, title, completed } in paginatedTasks" :key="id" :id :title :completed />
        </div>
        <NPagination :item-count="tasks.length" :page="pagination.page" :page-size="pagination.pageSize" @update:page="handleChangePage" />
    </div>
</template>

<style lang="scss" scoped>
.tasks {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &__list {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 24px;
    }
}
</style>
