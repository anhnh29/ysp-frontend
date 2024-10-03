<template>
  <ion-content :fullscreen="true">
    <ion-list>
      <ion-item v-for="post in posts" :key="post.id" lines="none" class="content"
        v-show="post.status === Status.APPROVED">
        <PostItem :post="post" :country="country" />
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
import PostItem from './PostItem.vue';
import { IPostItem, Status } from '../../types';

defineProps<{ posts: IPostItem[], country: string }>();

</script>
