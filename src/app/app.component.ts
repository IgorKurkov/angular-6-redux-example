import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { IAppState } from './store';
import { INCREMENT } from './actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'redux-app';
  @select() counter;
  constructor(private ngRedux: NgRedux<IAppState>) {
    console.log(this.counter)
  }
  
  increment() {
    this.ngRedux.dispatch({ type: INCREMENT })
  }
}
