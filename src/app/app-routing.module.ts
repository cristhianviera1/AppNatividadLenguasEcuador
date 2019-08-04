import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'culturas',
    loadChildren: () => import( './culturas/culturas.module').then(m => m.CulturasPageModule)
  },
  { path: 'recursos',
    loadChildren: () => import ('./recursos/recursos.module').then(m => m.RecursosPageModule)
  },
  { path: 'cultura-descripcion',
  loadChildren: () => import ('./cultura-descripcion/cultura-descripcion.module').then(m => m.CulturaDescripcionPageModule)
  },
  { path: 'login',
  loadChildren: () => import ('./login/login.module').then(m => m.LoginPageModule)
  },  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
