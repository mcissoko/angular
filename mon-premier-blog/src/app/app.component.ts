import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyB59MwK9_LppEAUQlptprm8XowOiYCZYgs',
    authDomain: 'bookshalves-dd003.firebaseapp.com',
    databaseURL: 'https://bookshalves-dd003.firebaseio.com',
    projectId: 'bookshalves-dd003',
    storageBucket: 'bookshalves-dd003.appspot.com',
    messagingSenderId: '575622147514'
  };
  firebase.initializeApp(config);
  }

}
