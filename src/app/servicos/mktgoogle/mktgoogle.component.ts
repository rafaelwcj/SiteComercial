import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'app-mktgoogle',
  templateUrl: './mktgoogle.component.html',
  styleUrls: ['./mktgoogle.component.css']
})
export class MktgoogleComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    var p = $( "#divMktGoogle" );
    var offset = p.offset();
    console.log(this._router.url);
    if(this._router.url == '/servicos?tipo=mktgoogle')
      $("html, body").animate({ scrollTop: offset.top - 50 }, 1500);

  }

}
