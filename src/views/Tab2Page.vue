<template>
  <ion-page>
    <header-component title="Tab 2"/>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 2 page" link="/tab2/subpage"/>
    </ion-content>
    <TabBar/>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import TabBar from "@/components/TabBar.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>
