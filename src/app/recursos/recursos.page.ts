import { Component, OnInit } from '@angular/core';
import { LoginPage }from '../login/login.page';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {


  constructor(private login:LoginPage) {}

  ngOnInit() {
    console.log(this.login);
  }
}
