import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessaoComponent } from './paginas/sessao/sessao.component';

const routes: Routes = [{ path: 'iniciar', component: SessaoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
