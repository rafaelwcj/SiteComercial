import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'app-lojavirtuais',
  templateUrl: './lojavirtuais.component.html',
  styleUrls: ['./lojavirtuais.component.css']
})
export class LojavirtuaisComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

    var p = $( "#divLojasVirtuais" );
    var offset = p.offset();
    console.log(this._router.url);
    if(this._router.url == '/servicos?tipo=lojasvirtuais')
      $("html, body").animate({ scrollTop: offset.top + 180 }, 1500);

  }

}
