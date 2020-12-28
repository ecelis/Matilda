<template>
  <v-app>
    <AppBar />
    <v-main>
      <p id="currentRoom"></p>
      <vue-webrtc ref="webrtc"
        roomId="public-room"
        stunServer="stun:stun1.l.google.com:19302"
        width="100%"
        v-on:joined-room="logEvent"
        v-on:left-room="logEvent"
        v-on:opened-room="logEvent"
        @error="onError" />
      <v-row align="center" justify="space-around">
        <v-btn elevation="2" color="primary"
          @click="onJoin">Join room</v-btn>
        <v-btn elevation="2" color="primary"
          @click="onLeave">Hangup</v-btn>
      </v-row>
    </v-main>

    <v-footer app>
      <!-- TODO -->
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'
import AppBar from './components/AppBar';
import * as io from 'socket.io-client';
import WebRTC from 'vue-webrtc';
window.io = io;
Vue.use(WebRTC);

export default {
  name: 'App',
  components: {
    AppBar,
  },

  data() {
    return {
      img: null,
      roomId: "public-room"
    }
  },
  methods: {
    onCapture() {
      this.img = this.$refs.webrtc.capture();
    },
    onJoin() {
      this.$refs.webrtc.join();
    },
    onLeave() {
      this.$refs.webrtc.leave();
    },
    onError(error, stream) {
      console.log('On Error Event', error, stream);
    },
    logEvent(event) {
      console.log('Event : ', event);
    }
  },
  mounted: function() {
  }
};
</script>
