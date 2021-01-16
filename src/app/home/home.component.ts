import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

    var p = $( "#divHome" );
    var offset = p.offset();
    console.log(this._router.url);
    if(this._router.url == '/home')
      $("html, body").animate({ scrollTop: offset.top + 180 }, 1500);

  }

}
