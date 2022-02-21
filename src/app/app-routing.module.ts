import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path: '', 
    pathMatch : 'full', 
    redirectTo: 'pokemons'
  },


    // Auth routes
    {
      path: '',
      loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    
    // App routes
    {
      path: '',
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      component: LayoutComponent,
      children: [
          {
            path: 'pokemons', 
            loadChildren: () => import('./modules/pokemons/pokemons.module').then(m => m.PokemonsModule)
          },
      ]
    },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
