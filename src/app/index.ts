import { createApp } from 'vue';
import { router, store } from './providers';
import App from '@/app/App.vue';

const initializeApp = createApp(App).use(router).use(store);

export const app = initializeApp;
