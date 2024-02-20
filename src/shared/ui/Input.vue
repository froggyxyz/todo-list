<script lang="ts" setup>
import { NFormItem, NInput } from 'naive-ui';
import { useField } from 'vee-validate';
import { toRef, watch } from 'vue';

const props = defineProps<{
    name: string;
    label: string;
    placeholder: string;
}>();

const emit = defineEmits<{ update: [value: string] }>();

const { value, errorMessage } = useField<string>(toRef(props, 'name'), undefined);

watch(value, () => {
    emit('update', value.value);
});
</script>

<template>
    <NFormItem :label>
        <NInput v-model:value="value" :placeholder />
        <template #feedback>
            {{ errorMessage }}
        </template>
    </NFormItem>
</template>
