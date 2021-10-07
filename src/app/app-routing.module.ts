import { RouterModule, Routes } from '@angular/router';

import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: CatalogoComponent},
  { path: 'about', component: ItemComponent},
  { path: 'item', component: ItemComponent},
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
