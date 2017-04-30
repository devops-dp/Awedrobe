import { Component } from '@angular/core';
import { ViewConstants } from './view-constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private AppConst: ViewConstants){

  }
}
