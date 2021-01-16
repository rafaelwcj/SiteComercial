import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

    var p = $( "#divSobre" );
    var offset = p.offset();
    console.log(this._router.url);
    if(this._router.url == '/sobre')
      $("html, body").animate({ scrollTop: offset.top + 180 }, 1500);

  }

}
