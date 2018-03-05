import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from '../service-one.service';

@Component({
  selector: 'app-for-service',
  templateUrl: './for-service.component.html',
  styleUrls: ['./for-service.component.css']
})
export class ForServiceComponent implements OnInit {

  constructor(private sone: ServiceOneService) { }
  profile_name: string = null;
  ngOnInit() {

    this.sone.setProfileName("Spiderman");
    this.profile_name = this.sone.getProfileName();
  }

}
