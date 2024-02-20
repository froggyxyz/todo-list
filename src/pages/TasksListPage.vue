<script lang="ts" setup>
import TasksList from '@/widgets/TasksList.vue';
import { NTabs, NTabPane } from 'naive-ui';
import AddTask from '@/features/AddTask.vue';
import { useTasksStore } from '@/shared/stores';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const store = useTasksStore();
const { fetchTasks } = store;
const { getTasks, getNotCompletedTasks, getCompletedTasks } = storeToRefs(store);

onMounted(() => {
    if (!getTasks.value.length) fetchTasks();
});
</script>

<template>
    <div class="tasks-list-page">
        <div class="tasks-list-page__top">
            <h1>Todo-list</h1>
            <AddTask />
        </div>
        <NTabs>
            <NTabPane name="Все">
                <TasksList :tasks="getTasks" />
            </NTabPane>
            <NTabPane name="Незавершенные">
                <TasksList :tasks="getNotCompletedTasks" />
            </NTabPane>
            <NTabPane name="Завершенные">
                <TasksList :tasks="getCompletedTasks" />
            </NTabPane>
        </NTabs>
    </div>
</template>

<style lang="scss" scoped>
.tasks-list-page {
    padding: 40px 0;
    margin: 0 auto;
    min-height: 100vh;
    max-width: 40vw;

    @media screen and (max-width: 900px) {
        max-width: unset;
        margin: 0 20px;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }
}
</style>
