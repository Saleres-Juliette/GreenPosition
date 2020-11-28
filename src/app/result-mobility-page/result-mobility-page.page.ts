import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-mobility-page',
  templateUrl: './result-mobility-page.page.html',
  styleUrls: ['./result-mobility-page.page.scss'],
})
export class ResultMobilityPagePage implements OnInit {

  UserScore: Idea = {
    id : "test",
    accomodation : "0",
    mobility : "0",
    dailyfeeding : "0",
  };

  constructor( private ideaService: IdeaService, public afAuth: AngularFireAuth) {

    this.afAuth.idToken.subscribe(user => {
      console.log(user);
      let userData : Observable<Idea> = this.ideaService.getIdea(user);
      userData.subscribe(data => {
        this.UserScore = data;
      })
    });
   }
   ngOnInit() {
  }

}
