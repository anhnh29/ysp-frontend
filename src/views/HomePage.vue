<template>
  <ion-tabs>
    <ion-tab tab="feed">
      <div id="feed-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>News Feed</ion-title>
          </ion-toolbar>
        </ion-header>
        <NewsFeedPage :posts="posts" :country="country" />
      </div>
    </ion-tab>

    <ion-tab tab="dashboard">
      <div id="dashboard-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Dashboard</ion-title>
          </ion-toolbar>
        </ion-header>
        <DashboardPage :posts="posts" @update:posts="updatePosts" />
      </div>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="feed">
        <ion-icon :icon="playCircle" />
        News Feed
      </ion-tab-button>
      <ion-tab-button tab="dashboard">
        <ion-icon :icon="radio" />
        Dashboard
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
import {
  IonTabs,
  IonTab,
  IonTabBar,
  IonToolbar,
  IonTabButton,
} from '@ionic/vue';
import { onMounted, reactive, ref } from 'vue';
import { IPostItem } from '../types';
import NewsFeedPage from '../components/newsFeed/NewsFeedPage.vue';
import DashboardPage from '../components/dashboard/DashboardPage.vue';
import { Geolocation } from '@capacitor/geolocation';
import { mockData } from '../services/mockApi'


import { playCircle, radio } from 'ionicons/icons';
const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const country = ref('ko'); //init country code

const posts = reactive<IPostItem[]>([]);

const getCurrentCountry = async () => {
  try {
    // Get the current position
    const position = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = position.coords;

    // Call a reverse geocoding API to get the country
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`
    );
    const data = await response.json();

    // Extract the country from the API response
    const address = data.results[0].address_components.find((component: any) =>
      component.types.includes('country')
    );
    if (address && address?.short_name) {
      country.value = address.short_name;
    }
  } catch (error) {
    console.error('Error fetching location:', error);
  }
}

const updatePosts = (postChanged: IPostItem) => {
  const newPosts: IPostItem[] = posts.map((post) => {
    if (post.id === postChanged.id) {
      return { ...postChanged };
    }
    return post;
  });
  posts.splice(0, posts.length, ...newPosts)
};

onMounted(async () => {
  getCurrentCountry();
  posts.push(...mockData as IPostItem[])
});

</script>

<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
