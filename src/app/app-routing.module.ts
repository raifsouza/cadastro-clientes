import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/pages/client-list/client-list.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  {path:'cadastro', component:CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
