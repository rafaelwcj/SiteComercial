import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

siteinstitucionais:boolean = false;
lojavirtuais:boolean = false;
mktgoogle:boolean = false;
mktredesociais:boolean = false;

  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
  
    const tipo: string = this._router.snapshot.queryParamMap.get('tipo');

    if(tipo === 'institucionais')
    {
      this.siteinstitucionais = true;
    }
    else if (tipo === 'lojasvirtuais')
    {
      this.lojavirtuais = true;
    }
    else if (tipo === 'mktgoogle')
    {
      this.mktgoogle = true;
    }
    else if (tipo === 'mktredesociais')
    {
      this.mktredesociais = true;
    }

  }

}
