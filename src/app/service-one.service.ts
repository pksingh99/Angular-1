import { Injectable } from '@angular/core';

@Injectable()
export class ServiceOneService {

  constructor() { }
  profile_name: string = "";
  setProfileName(abc) {
    this.profile_name = abc;
  }
  getProfileName() {
    return this.profile_name;
  }
}
