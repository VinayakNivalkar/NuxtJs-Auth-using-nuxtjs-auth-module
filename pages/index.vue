<template>
  <v-layout column justify-center align-center>
    <v-card>
      <v-layout align-center justify-center colum>
        <v-avatar>
          <img :src="$auth.user.picture" />
        </v-avatar>
        <v-card-text class="font-weight-bold">{{
          $auth.user.name
        }}</v-card-text>
        <v-card-text class="font-weight-bold">{{
          $auth.user.email
        }}</v-card-text>
      </v-layout>
    </v-card>
  </v-layout>
</template>
