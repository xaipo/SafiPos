/**
 * Created by xaipo on 3/27/2018.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      /*{
        path: 'usuario',
        component: UserComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'cliente',
        component: ClienteComponent
      },
      {
        path: 'abogado',
        component: AbogadoComponent
      },
      {
        path: 'actividades',
        component: ActividadesComponent
      },
      {
        path: 'actividadExtra',
        component: ActividadExtraComponent
      },
      {
        path: 'actividadesParametro',
        component: ActividadParametrizableComponent
      },
      {
        path: 'flujoProceso',
        component: FlujoProcesoComponent
      },
      {
        path: 'bajaFlujoProceso',
        component: BajaFlujoProcesoComponent
      },
      {
        path: 'caso',
        component: CasoComponent
      },
      {
        path: 'reporte',
        component: ReporteComponent
      },
*/
    ]
  },

  { path: 'login', component: LoginComponent },

  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
