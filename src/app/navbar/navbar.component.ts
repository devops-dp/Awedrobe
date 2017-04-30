import { Component, OnInit } from '@angular/core';
import { ViewConstants } from '../view-constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private AppConst: ViewConstants) { }

  ngOnInit() {
  }

}
