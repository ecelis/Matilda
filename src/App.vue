<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-row>
        <h3 id="currentRoom">{{roomId}}</h3>
        <vue-webrtc ref="webrtc"
          :roomId="roomId"
          stunServer="stun:stun1.l.google.com:19302"
          width="100%"
          v-on:joined-room="logEvent"
          v-on:left-room="logEvent"
          v-on:opened-room="logEvent"
          @error="onError" />
      </v-row>
      <v-row align="center" justify="space-around">
        <v-btn v-if="onCall" elevation="2" color="primary"
          @click="onLeave">Hangup</v-btn>
      </v-row>
    </v-main>

    <v-footer app>
      <!-- TODO -->
    </v-footer>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary"
        dark
        v-bind="attrs"
        v-on="on"
        >
        Join Room
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Room</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Room name"
                required v-model="roomId" placeholder="public-room"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn elevation="2" color="primary"
          @click="onJoin">Enter</v-btn>
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dialog: false,
      onCall: false,
      img: null,
      roomId: null
    }
  },
  methods: {
    onCapture() {
      this.img = this.$refs.webrtc.capture();
    },
    onJoin() {
      this.$refs.webrtc.join();
      this.onCall = true;
      this.dialog = false;
    },
    onLeave() {
      this.$refs.webrtc.leave();
      this.onCall = false;
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
