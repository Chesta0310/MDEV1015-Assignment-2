import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC46-wRww6znltIEmySf3gmN7FXFc83teM',
  authDomain: 'react-native-79228.firebaseapp.com',
  projectId: 'react-native-79228',
  storageBucket: 'react-native-79228.appspot.com',
  messagingSenderId: '37984021705',
  appId: '1:37984021705:web:c81464b261cf20afbd3118',
  measurementId: 'G-E287BKH7ZR',
  databaseURL: 'https://react-native-79228.firebaseio.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
