import { defineStore } from 'pinia';
import type { ITask, ITaskData } from '@/shared/api/models';

export const useTasksStore = defineStore('tasks', {
    state: (): { tasks: ITask[] } => ({
        tasks: [],
    }),
    actions: {
        fetchTasks() {
            fetch(import.meta.env.VITE_API_URL)
                .then((res) => res.json())
                .then((res) => (this.tasks = res));
        },
        addTask(task: ITask) {
            this.tasks.push(task);
        },
        toggleCompletedTask(id: number) {
            const task = this.tasks.find((task) => task.id === id);
            if (!task) return;

            task.completed = !task.completed;
        },
        deleteTask(id: number) {
            const tasks = this.tasks;

            const taskIndex = tasks.findIndex((task) => task.id === id);
            tasks.splice(taskIndex, 1);
        },
        editTask(id: number, data: ITaskData) {
            const tasks = this.tasks;

            const taskIndex = tasks.findIndex((task) => task.id === id);
            tasks[taskIndex] = { ...tasks[taskIndex], ...data };
        },
    },
    getters: {
        getTasks: ({ tasks }): ITask[] => tasks.toReversed(),
        getCompletedTasks(): ITask[] {
            return this.getTasks.filter((task) => task.completed);
        },
    },
    persist: true,
});
