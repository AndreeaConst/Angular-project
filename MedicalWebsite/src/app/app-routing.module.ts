import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';

const routes: Routes = [
  {
    path:'MyFavorites',
    component:MyFavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
