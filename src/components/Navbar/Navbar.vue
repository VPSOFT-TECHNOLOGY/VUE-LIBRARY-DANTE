<template>
  <v-app-bar app dark color="green darken-4">
    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text rounded to="/">{{ homeTitle }}</v-btn>
    <v-btn text rounded to="/signin">{{ signInTitle }}</v-btn>
    <v-btn text rounded to="/aboutus">{{ aboutTitle }}</v-btn>
    <v-btn text rounded to="/contacus">{{ contactTitle }}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        appTitle: String,
        homeTitle: String,
        signInTitle:String,
        aboutTitle: String,
        contactTitle: String
    }
}
</script>