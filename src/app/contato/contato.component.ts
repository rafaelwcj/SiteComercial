import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Contato } from "../shared/contato.model";
import { ContatoService } from '../shared/contato.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: "app-contato",
  templateUrl: "./contato.component.html",
  styleUrls: ["./contato.component.css"],
})
export class ContatoComponent implements OnInit {
  contato: Contato;
  isValid: boolean = false;
  key: string = "";

  @ViewChild('loader', { static: true }) divLoader: ElementRef;
  public divElement: HTMLElement;

  constructor(
    private _router: Router,
    private _contatoService: ContatoService,
    private toastr:ToastrService
  ) {
  }

  ngOnInit() {
    this.resetForm();
    var p = $("#divContato");
    var offset = p.offset();
    console.log(this._router.url);
    if (this._router.url == "/contato")
      $("html, body").animate({ scrollTop: offset.top + 180 }, 1500);
  }

  resetForm(){
    this.contato = {
      ContatoID: null,
      Nome: null,
      Email: null,
      Telefone: null,
      Descricao: null,
    };
  }

  validateForm() {
    this.isValid = true;
    console.log(this.contato)
    if (this.contato.Nome == null) this.isValid = false;
    else if (this.contato.Email == null) this.isValid = false;
    else if (this.contato.Telefone == null) this.isValid = false;
    else if (this.contato.Descricao == null) this.isValid = false;
    return this.isValid;
  }

  onSubmit() {
    if (this.validateForm()) {
      this._contatoService.salvarContato(this.contato).subscribe(r => {
        this.resetForm();
        document.getElementById('divLoader').hidden = true;
        document.getElementById("modalContato").style.display = "block";
      })
    } else {
      window.alert('Preencha os campos para enviar o contato.');
    }
  }

  hideModal(){
    document.getElementById("modalContato").style.display = "none";
  }
}
