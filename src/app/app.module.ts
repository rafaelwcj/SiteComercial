import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { HomeComponent } from './home/home.component';
import { SiteinstitucionaisComponent } from './servicos/siteinstitucionais/siteinstitucionais.component';
import { LojavirtuaisComponent } from './servicos/lojavirtuais/lojavirtuais.component';
import { MktgoogleComponent } from './servicos/mktgoogle/mktgoogle.component';
import { MktredesociaisComponent } from './servicos/mktredesociais/mktredesociais.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SobreComponent,
    ServicosComponent,
    SiteinstitucionaisComponent,
    HomeComponent,
    LojavirtuaisComponent,
    MktgoogleComponent,
    MktredesociaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
