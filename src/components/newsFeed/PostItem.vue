<template>
  <ion-card class="post-card">
    <ion-card-header>
      <ion-item lines="none">
        <ion-avatar class="avatar">
          <img :src="post.authorInfo.avatar" alt="Author's avatar" />
        </ion-avatar>
        <ion-label>
          <h2 class="author-name">{{ post.authorInfo.name }}</h2>
        </ion-label>
      </ion-item>
    </ion-card-header>

    <ion-card-content>
      <h3 class="post-title">{{ post.title }}</h3>
      <div class="post-content" v-html="post.content"></div>
      <div class="translate" @click="handleTranslate(post, country)">{{ showTranslation ? 'Hide Translation' :
        'Translate' }}</div>
      <div v-show="showTranslation && post?.translatedContent" v-html="post.translatedContent"></div>
      <!-- Comment List -->
      <CommentList :comments="post.comments" :country="country" />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts" setup>
import { IPostItem } from '../../types';
import CommentList from './CommentList.vue';
import { ref } from 'vue';
import { useTranslate } from '../../composables/useTranslate';

const { translate } = useTranslate();  // use composable function

const showTranslation = ref(false);

defineProps<{ post: IPostItem, country: string }>();

const handleTranslate = async (post: IPostItem, country: string) => {
  showTranslation.value = !showTranslation.value;
  if (!post?.translatedContent) {
    await translate(post, post.content, 'en', country); // translate post content
  }
};
</script>

<style scoped>
ion-card-header {
  padding: 10px 0;
}

.avatar{
  margin-right: 6px;
}

.translate {
  color: rgb(104, 104, 251);
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  margin: 6px 0;
}

.post-card {
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.author-name {
  font-weight: bold;
  color: #4a4a4a;
}

.post-title {
  margin: 0;
  font-size: 1.5rem;
}

.post-content {
  margin-top: 5px;
  color: #555;
}

</style>