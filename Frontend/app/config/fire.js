import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyC7jQf0_mqVqCnAd9WxVK6jQ6uBa1r22t0',
  authDomain: 'bootcamp-fac83.firebaseapp.com',
  databaseURL: 'https://bootcamp-fac83.firebaseio.com/',
  projectId: 'bootcamp-fac83',
  storageBucket: 'bootcamp-fac83.appspot.com',
  messagingSenderId: '250741955484',
  appId: '1:250741955484:web:e542c551da7a8be49c8659',
});

export default app;
