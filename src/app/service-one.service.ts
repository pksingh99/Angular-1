import { Injectable } from '@angular/core';

@Injectable()
export class ServiceOneService {

  constructor() { }
  profile_name: string = "";
  public active:boolean =false;
  //this is set method...
  setProfileName(abc) {
    this.profile_name = abc;
  }

  //this is get method...
  getProfileName() {
    return this.profile_name;
  }

setActive(){

}
  getActive():boolean{
    return this.active;
  }
}
