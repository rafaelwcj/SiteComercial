import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'app-siteinstitucionais',
  templateUrl: './siteinstitucionais.component.html',
  styleUrls: ['./siteinstitucionais.component.css']
})
export class SiteinstitucionaisComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

    var p = $( "#divSiteInstitucionais" );
    var offset = p.offset();
    console.log(this._router.url);
    if(this._router.url == '/servicos?tipo=institucionais')
      $("html, body").animate({ scrollTop: offset.top + 180 }, 1500);

  }

}
