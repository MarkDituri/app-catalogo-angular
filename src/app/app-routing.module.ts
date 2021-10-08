import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ItemComponent } from './pages/item/item.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: CatalogoComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item', component: ItemComponent},
  {path : '' , pathMatch : 'full', redirectTo : 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
