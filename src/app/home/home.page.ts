import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataUser = {
    email: '',
    password: ''
 };

  constructor(

    public afAuth: AngularFireAuth

  ) {}


  }

