import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessaoComponent } from './paginas/sessao/sessao.component';
import { HomeComponent } from './paginas/home/home.component';
import { ApresentacaoComponent } from './paginas/apresentacao/apresentacao.component';
import { HomeDashComponent } from './dashboard/home/home.component';
import { PerfilComponent } from './dashboard/perfil/perfil.component';
import { InicialComponent } from './dashboard/inicial/inicial.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ApresentacaoComponent },
      { path: 'iniciar', component: SessaoComponent },
    ],
  },
  {
    path: 'in',
    component: HomeDashComponent,
    pathMatch: 'prefix',
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: InicialComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
