export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./TasksListPage.vue'),
    },
];
