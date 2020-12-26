import firebase from 'firebase/app';
import 'firebase/firestore';

export const db = firebase.initializeApp({ projectId: process.env.VUE_APP_PROJECT_ID })
  .firestore();

const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

db.settings({ timestampInSnapshots: true });
