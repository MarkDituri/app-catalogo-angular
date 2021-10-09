import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ItemComponent } from './pages/item/item.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'home', component: CatalogoComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'search/:termino', component: SearchComponent},
  { path : '' , pathMatch : 'full', redirectTo : 'home'},
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
