<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="Matilda Picture"
        class="shrink mr-2"
        contain
        src="matilda.png"
        transition="scale-transition"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/ecelis/matilda/"
      target="_blank"
      text
    >
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: {}
}
</script>
