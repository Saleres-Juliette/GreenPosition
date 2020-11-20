import { TestLoaderService } from './../services/test-loader.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accomodation-page',
  templateUrl: './accomodation-page.page.html',
  styleUrls: ['./accomodation-page.page.scss'],
})
export class AccomodationPagePage {


  data: any;
  myBoolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    if (this.route.snapshot.data["special"]) {
      this.data = this.route.snapshot.data['special'];
    }
  }


  onMyBooleanChange() {
    console.log(this.myBoolean);
  }

}


