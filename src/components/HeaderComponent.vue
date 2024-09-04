<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start" v-if="showBack">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";

defineProps({
  title: String,
  showBack: {
    type: Boolean,
    default: false,
  },
});
</script>