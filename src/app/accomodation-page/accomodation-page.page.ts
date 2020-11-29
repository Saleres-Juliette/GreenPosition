import { TestLoaderService } from './../services/test-loader.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-accomodation-page',
  templateUrl: './accomodation-page.page.html',
  styleUrls: ['./accomodation-page.page.scss'],
})
export class AccomodationPagePage {

  
  data: any;
  myBoolean = true;
  Score: number = 0;

  test:Idea = {
    id:"kk",
    accomodation:"1",
    mobility:"2",
    dailyfeeding:"3"
  }


  private ideas: Observable<Idea[]>;

  constructor(private route: ActivatedRoute, private router: Router, private ideaService: IdeaService, public afAuth: AngularFireAuth) {
    this.afAuth.idToken.subscribe(user => {
      console.log(user);
      let userScore : Observable<Idea> = this.ideaService.getIdea(user);
      userScore.subscribe(data => {
        this.test = data;
      })
    });
  }

  ngOnInit() {
    if (this.route.snapshot.data["special"]) {
      this.data = this.route.snapshot.data['special'];
    }
  }


  onMyBooleanChange() {
    console.log(this.myBoolean);
  }

  checkboxClick(e, points: number) {
    if (e.detail.checked == true) {
      this.Score += +points;
    } else {
      this.Score -= +points;
    }
  }

  createTask(){
     if (this.data.title == "accomodation") {
        this.test.accomodation = this.Score.toString();
     } else if (this.data.title == "mobility") {
        this.test.mobility = this.Score.toString();
     } else {
       this.test.dailyfeeding = this.Score.toString();
     }
     console.log(this.Score);
    this.ideaService.updateIdea(this.test);

  }
}


