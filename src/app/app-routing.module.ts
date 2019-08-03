import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'login',
=======
    redirectTo: 'home',
>>>>>>> 583b302d9a7b70bcbfc2dd13ad8df1fd0f92b758
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
<<<<<<< HEAD
  },
  { path: 'login',
  loadChildren: () => import ('./login/login.module').then(m => m.LoginPageModule)
  }



=======
  }


>>>>>>> 583b302d9a7b70bcbfc2dd13ad8df1fd0f92b758
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
