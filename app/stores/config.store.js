import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCS7lFmL7JzUYa8DzOLd6YFULBfAcqmLig",
  authDomain: "dinder-2809c.firebaseapp.com",
  databaseURL: "https://dinder-2809c.firebaseio.com",
  projectId: "dinder-2809c",
  storageBucket: "dinder-2809c.appspot.com",
  messagingSenderId: "683934081515"
};

export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}