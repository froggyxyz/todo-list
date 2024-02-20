import { defineRule } from 'vee-validate';

defineRule('required', (value: any) => {
    if (!value || !value.length) {
        return 'Поле обязательно к заполнению';
    }
    return true;
});
