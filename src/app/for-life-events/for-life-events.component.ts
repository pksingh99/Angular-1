import { Component, OnInit,Input,OnChanges,SimpleChanges,OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-for-life-events',
  templateUrl: './for-life-events.component.html',
  styleUrls: ['./for-life-events.component.css']
})
export class ForLifeEventsComponent implements OnChanges,OnDestroy  {

  @Input() dogLove:String;
  constructor() { }

  ngOnChanges(Change: SimpleChanges) {
    for(let prop in Change){
     let bapa= Change[prop];
     let car = JSON.stringify(bapa.currentValue);
     let pre = JSON.stringify(bapa.previousValue);
     console.log(bapa,car,pre);

    }

  }
  ngOnDestroy():void{
    console.log("Des")
  }
}
