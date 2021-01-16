import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'app-mktredesociais',
  templateUrl: './mktredesociais.component.html',
  styleUrls: ['./mktredesociais.component.css']
})
export class MktredesociaisComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

    var p = $( "#divMktRedeSociais" );
    var offset = p.offset();
    console.log(this._router.url);
    if(this._router.url == '/servicos?tipo=mktredesociais')
      $("html, body").animate({ scrollTop: offset.top - 50 }, 1500);

  }

}
