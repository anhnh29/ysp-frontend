<template>
  <ion-item lines="none">
    <ion-avatar class="avatar">
      <img :src="comment.userInfo.avatar" alt="Author's avatar" />
    </ion-avatar>
    <ion-label>
      <h2 class="author-name">{{ comment.userInfo.name }}</h2>
      <p v-html="comment.content"></p>
      <p class="translate" @click="handleTranslate(comment, country)">{{ showTranslation ? 'Hide Translation' :
        'Translate' }}</p>
      <p v-show="showTranslation && comment?.translatedContent" v-html="comment.translatedContent"></p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts" setup>
import { IComment } from '../../types';
import { ref } from 'vue';
import { useTranslate } from '../../composables/useTranslate';

const { translate } = useTranslate();  // use composable function

const showTranslation = ref(false);

defineProps<{ comment: IComment, country: string }>();

const handleTranslate = async (comment: IComment, country: string) => {
  showTranslation.value = !showTranslation.value;
  if (!comment?.translatedContent) {
    await translate(comment, comment.content, 'en', country);  // translate post comment
  }
};
</script>

<style scoped>
ion-item {
  align-items: start;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 10px;
}

.translate {
  color: rgb(104, 104, 251);
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  margin: 6px 0;
}

.translation-text {
  margin-top: 10px;
  font-style: italic;
  color: #007bff;
}
</style>