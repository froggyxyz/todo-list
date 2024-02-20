<script lang="ts" setup>
import { NFormItem, NInput } from 'naive-ui';
import { useField } from 'vee-validate';
import { toRef } from 'vue';

const props = defineProps<{
    name: string;
    label: string;
    placeholder: string;
}>();

const { value, errorMessage } = useField<string>(toRef(props, 'name'), undefined);
</script>

<template>
    <NFormItem :label :validation-status="errorMessage ? 'error' : 'success'">
        <NInput v-model:value="value" :placeholder />
        <template #feedback>
            {{ errorMessage }}
        </template>
    </NFormItem>
</template>
