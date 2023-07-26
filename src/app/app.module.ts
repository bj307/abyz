import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SessaoComponent } from './paginas/sessao/sessao.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { LoginComponent } from './componentes/login/login.component';

import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { HomeComponent } from './paginas/home/home.component';
import { ApresentacaoComponent } from './paginas/apresentacao/apresentacao.component';
import { HomeDashComponent } from './dashboard/home/home.component';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SplitterModule } from 'primeng/splitter';
import { MenuModule } from 'primeng/menu';
import { DashbarComponent } from './componentes/dashbar/dashbar.component';
import { InicialComponent } from './dashboard/inicial/inicial.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { NovoprojetoComponent } from './componentes/novoprojeto/novoprojeto.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { PerfilComponent } from './dashboard/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    SessaoComponent,
    CadastroComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ApresentacaoComponent,
    HomeDashComponent,
    DashbarComponent,
    InicialComponent,
    NovoprojetoComponent,
    PerfilComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    RippleModule,
    ToolbarModule,
    MenubarModule,
    CardModule,
    PanelModule,
    StyleClassModule,
    FieldsetModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule,
    DividerModule,
    MessagesModule,
    DockModule,
    RadioButtonModule,
    SlideMenuModule,
    SplitterModule,
    MenuModule,
    ScrollPanelModule,
    SidebarModule,
    InputTextareaModule,
    InputMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
