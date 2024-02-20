<script lang="ts" setup>
import { useTasksStore } from '@/shared/stores';
import { computed, onMounted, reactive } from 'vue';
import TaskCard from '@/shared/ui/TaskCard.vue';
import { NPagination } from 'naive-ui';
import { storeToRefs } from 'pinia';

const props = defineProps<{ completed?: boolean }>();

const store = useTasksStore();
const { getTasks, getCompletedTasks } = storeToRefs(store);
const { fetchTasks } = store;

const pagination = reactive({
    page: 1,
    pageSize: 10,
});

const handleChangePage = (page: number) => (pagination.page = page);

const paginatedTasks = computed(() =>
    props.completed
        ? getCompletedTasks.value.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize)
        : getTasks.value.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize),
);

onMounted(() => {
    if (!getTasks.value.length) fetchTasks();
});
</script>

<template>
    <div class="tasks">
        <div class="tasks__list">
            <TaskCard v-for="{ id, title, completed } in paginatedTasks" :key="id" :id :title :completed />
        </div>
        <NPagination
            :item-count="completed ? getCompletedTasks.length : getTasks.length"
            :page="pagination.page"
            :page-size="pagination.pageSize"
            @update:page="handleChangePage"
        />
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
