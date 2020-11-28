import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IdeaService, Idea } from 'src/app/services/idea.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage {

  dataUser = {
    email: '',
    password: ''
 };

 connected: boolean;

email = '';
userId = '';
method = '';

test: Idea = {
  id:"null",
  accomodation:"1",
  mobility:"2",
  dailyfeeding:"3"
}



  constructor(
    public afAuth: AngularFireAuth,
    private ideaService: IdeaService
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
      this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then( test =>
        this.afAuth.idToken.subscribe(user => {
          console.log(user);
          this.test.id = user;
          this.ideaService.addIdea(this.test);
      })
      );
      this.dataUser = {
        email: '',
        password: ''
      };
      


    }


logout(){
  this.afAuth.signOut();
  }


  }
