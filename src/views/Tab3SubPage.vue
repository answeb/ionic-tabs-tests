<template>
  <ion-page>
    <header-component title="Tab 3 subpage" :show-back="true"/>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3 subpage</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 3 subpage"/>
    </ion-content>
    <TabBar/>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import TabBar from '@/components/TabBar.vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>
