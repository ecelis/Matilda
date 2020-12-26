<template>
  <div id="app">
    <div id="videos">
      <Video id="localVideo" muted="1"/>
      <Video id="remoteVideo"/>
    </div>
  </div>
</template>

<script>
import Video from './components/Video.vue'

export default {
  name: 'App',
  components: {
    Video
  }
}
</script>
