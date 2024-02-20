<script lang="ts" setup>
import TasksList from '@/widgets/TasksList.vue';
import { NTabs, NTabPane } from 'naive-ui';
import AddTask from '@/features/AddTask.vue';
</script>

<template>
    <div class="tasks-list-page">
        <div class="tasks-list-page__top">
            <h1>Todo-list</h1>
            <AddTask />
        </div>
        <NTabs type="segment">
            <NTabPane name="Все">
                <TasksList />
            </NTabPane>
            <NTabPane name="Незавершенные">
                <TasksList completed />
            </NTabPane>
            <NTabPane name="Завершенные">
                <TasksList completed />
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

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }
}
</style>
