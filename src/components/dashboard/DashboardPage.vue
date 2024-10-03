<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Admin Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="content">
      <ion-grid class="grid">
        <ion-row class="header">
          <ion-col>Title</ion-col>
          <ion-col>Content</ion-col>
          <ion-col>Status (Approved)</ion-col>
        </ion-row>

        <ion-row v-for="(item) in posts" :key="item.id">
          <ion-col>{{ item.title }}</ion-col>
          <ion-col>{{ item.content }}</ion-col>
          <ion-col>
            <div>
              <div v-if="item.status === Status.OPEN" @click="startChangeStatus(item)">open</div>
              <div v-else> <ion-toggle :checked="item.status === Status.APPROVED"
                  @ionChange="(event) => updateStatus(event, item)" /></div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonToggle } from '@ionic/vue';
import { IPostItem, Status } from '../../types';

const emit = defineEmits(['update:posts']);

defineProps<{ posts: IPostItem[] }>();

const handleChangePosts = async (item: IPostItem, status?: Status) => {
  try {
    emit('update:posts', { ...item, status: status ? status : Status.APPROVED });
  } catch (error) {
    console.error('Error calling API:', error);
  }
};

// start change status open -> approved
const startChangeStatus = async (item: IPostItem) => {
  handleChangePosts(item);
}

// update status when toggle is changed
const updateStatus = async (event: CustomEvent, item: IPostItem) => {
  const newStatus = event.detail.checked ? Status.APPROVED : Status.REJECTED;
  handleChangePosts(item, newStatus);
};

</script>

<style scoped>
ion-content {
  padding: 100px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 2px;
}

ion-col {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  font-weight: bold;
}
</style>