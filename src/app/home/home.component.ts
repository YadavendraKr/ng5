import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
itemCount:number;
btnText:string='Add Item';
lifeGoal:string='My default Life Goal';
goals=[];
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals=res);
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
  addItem=function(){
    this.goals.push(this.lifeGoal);
    this.lifeGoal='';
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(x){
    this.goals.splice(x,1);
    this._data.changeGoal(this.goals);
  }

}
