<template>
    <ion-list>
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" :country="country" />
    </ion-list>
  </template>
  
  <script lang="ts" setup>
  import { IComment } from '../../types';
  import CommentItem from './CommentItem.vue';
  
  defineProps<{ comments: IComment[], country: string }>();
  </script>
  