import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage {

  dataUser = {
    email: '',
    password: ''
 };

 connected: boolean;

email = '';
userId = '';
method = '';



  constructor(
    public afAuth: AngularFireAuth

    ) {

this.afAuth.authState.subscribe(auth => {

  if (!auth) {
    console.log('non connecté');
    this.connected = false;
  } else {
    console.log('connecté');
    this.connected = true;

  }

});

    }

    login(){
this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
this.dataUser = {
  email: '',
  password: ''
};
    }


    signUp(){
this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
this.dataUser = {
  email: '',
  password: ''
};

    }


logout(){
  this.afAuth.signOut();
  }


  }
  
