import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
   firebase.default.initializeApp({
    apiKey: "AIzaSyCnwEUDjZMx9_VFpz5gynjy2YICI1v0rc0",
    authDomain: "fir-project-d7faf.firebaseapp.com",
   })

  }
}
