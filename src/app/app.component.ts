import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  id: number = 18;
  name: string = "Rohan";
sendText:string ="";

  ngOnInit() {

    let myHero = new Hero(42, 'SkyDog',
      'Fetch any object at any distance');
    console.log('My hero is called ' + myHero.name);

  }
}
