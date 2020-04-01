<template>
  <v-layout align-center justify-center>
    <v-card class="pa-5">
      <v-layout align-center justify-center column>
        <v-btn
          class="mx-2 mt-2"
          color="primary"
          @click="$auth.loginWith('facebook')"
        >
          <v-icon class="mx-2" size="32">mdi-facebook</v-icon>

          login with facebook
        </v-btn>
        <v-layout align-center justify-center row>
          <v-divider width="100"></v-divider>
          <v-subheader class="overline">OR</v-subheader>
          <v-divider width="100"></v-divider>
        </v-layout>
        <v-btn class="mx-2 mb-2" @click="$auth.loginWith('google')">
          <v-avatar class="mx-2" size="30">
            <img src="~/static/Google.svg" />
          </v-avatar>

          signup with google
        </v-btn>
      </v-layout>
    </v-card>
  </v-layout>
</template>
