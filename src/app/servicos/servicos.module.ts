import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteinstitucionaisComponent } from './siteinstitucionais/siteinstitucionais.component';
import { LojavirtuaisComponent } from './lojavirtuais/lojavirtuais.component';
import { MktgoogleComponent } from './mktgoogle/mktgoogle.component';
import { MktredesociaisComponent } from './mktredesociais/mktredesociais.component';
//import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        //CursosRoutingModule
        //RouterModule
    ],
    exports: [],
    declarations: [
        SiteinstitucionaisComponent,
        LojavirtuaisComponent,
        MktgoogleComponent,
        MktredesociaisComponent
    ],
    providers: [],
})
export class ServicosModule { }
