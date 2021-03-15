<template>
  <v-content>
    <v-card width="500" class="mx-auto mt-9">
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>
        <v-text-field
          label="Nombre de usuario"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          label="Contraseña"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">{{btnRegister}}</v-btn>
        <v-btn color="info">{{btnSignIn}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>

<script>
export default {
    name: 'Signin',
    props:{
        title: String,
        btnRegister: String,
        btnSignIn: String
    }
}
</script>