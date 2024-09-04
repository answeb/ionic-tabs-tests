<template>
  <ion-tab-bar slot="bottom">
    router
    <ion-tab-button tab="tab1" href="/tab1" @click="router.navigate('/tab1', 'root')">
      <ion-icon aria-hidden="true" :icon="triangle"/>
      <ion-label>Tab 1</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2" href="/tab2" @click="router.navigate('/tab2', 'root')">
      <ion-icon aria-hidden="true" :icon="ellipse"/>
      <ion-label>Tab 2</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3" href="/tab3" @click="router.navigate('/tab3', 'root')">
      <ion-icon aria-hidden="true" :icon="square"/>
      <ion-label>Tab 3</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
  <ion-tab-bar slot="bottom">
    href
    <ion-tab-button tab="tab12" href="/tab1">
      <ion-icon aria-hidden="true" :icon="triangle"/>
      <ion-label>Tab 1</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab22" href="/tab2">
      <ion-icon aria-hidden="true" :icon="ellipse"/>
      <ion-label>Tab 2</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab32" href="/tab3">
      <ion-icon aria-hidden="true" :icon="square"/>
      <ion-label>Tab 3</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonLabel, IonIcon, useIonRouter } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
const router = useIonRouter();

</script>
