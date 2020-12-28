<template>
  <video autoplay playsinline></video>
</template>

<script>
export default {
  name: 'Video',
  props: {
    id: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video {
  min-width: 480px;
}
</style>
