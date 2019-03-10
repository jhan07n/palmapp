import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'welcome', 
    loadChildren: './welcome/welcome.module#WelcomePageModule' 
  },
  { 
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule' 
  },
  { 
    path: 'summary', 
    loadChildren: './summary/summary.module#SummaryPageModule' 
  },
  { 
    path: 'budget', 
    loadChildren: './budget/budget.module#BudgetPageModule' 
  },
  {
    path: 'cashin',
    loadChildren: './cashin/cashin.module#CashinPageModule'
  },
  {
    path: 'have',
    loadChildren: './have/have.module#HavePageModule'
  },
  {
    path: 'wants',
    loadChildren: './wants/wants.module#WantsPageModule'
  },
  { 
    path: 'access', 
    loadChildren: './access/access.module#AccessPageModule' 
  },
  { path: 'cashinpage', loadChildren: './cashinpage/cashinpage.module#CashinpagePageModule' },
  { path: 'have-page', loadChildren: './have-page/have-page.module#HavePagePageModule' },
  { path: 'wantspage', loadChildren: './wantspage/wantspage.module#WantspagePageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'custom', loadChildren: './custom/custom.module#CustomPageModule' },
  { path: 'add-field', loadChildren: './add-field/add-field.module#AddFieldPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
