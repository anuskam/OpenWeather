import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'daily-weather',
    pathMatch: 'full',
  },
  {
    path: 'daily-weather',
    loadChildren: () =>
      import('./features/daily-weather/daily-weather.module').then(
        module => module.DailyWeatherModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
