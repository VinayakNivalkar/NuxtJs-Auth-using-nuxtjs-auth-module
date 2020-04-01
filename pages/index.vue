<template>
  <v-layout column justify-center align-center>
    <v-card class="pa-5" width="500">
      <v-list>
        <v-list-item>
          <v-list-item-avatar size="75">
            <img
              :src="
                $store.state.auth.strategy === 'google'
                  ? $auth.user.picture
                  : $auth.user.picture.data.url
              "
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="ma-2 font-weight-bold">{{
              $auth.user.name
            }}</v-list-item-title>
            <v-list-item-subtitle class="ma-2 font-weight-bold">{{
              $auth.user.email
            }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon height="50" width="50" @click="$auth.logout()">
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-layout>
</template>
