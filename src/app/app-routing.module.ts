import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessaoComponent } from './paginas/sessao/sessao.component';
import { HomeComponent } from './paginas/home/home.component';
import { ApresentacaoComponent } from './paginas/apresentacao/apresentacao.component';
import { HomeDashComponent } from './dashboard/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ApresentacaoComponent },
      { path: 'iniciar', component: SessaoComponent },
    ],
  },
  { path: 'dashboard', component: HomeDashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
