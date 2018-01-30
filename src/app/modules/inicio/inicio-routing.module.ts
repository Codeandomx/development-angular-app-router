import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './../../components/inicio/inicio.component';

// configuramos la ruta principal
const routes: Routes = [{
	path: '', component: InicioComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [InicioComponent]
})
export class InicioRoutingModule { }
