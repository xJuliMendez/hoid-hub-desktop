<script setup lang="ts">
import { PropType } from 'vue';
import { CardProps } from './card.interface';

defineProps({
    content: {
        type: Object as PropType<CardProps>,
        required: true,
    },
});
</script>

<template>
    <div class="w-64 bg-[#005f73] rounded flex flex-col">
        <div class="text-xl font-bold">
            <slot name="header-media"></slot>
            <div>
                <slot name="header-title">
                    {{ content.title }}
                </slot>
            </div>
        </div>
        <div class="card-body">
            <slot>
                {{ content.body }}
            </slot>
        </div>
        <div class="card-footer">
            <slot name="footer">
                {{ content.footer }}
            </slot>
        </div>
    </div>
</template>

