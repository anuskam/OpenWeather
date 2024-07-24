import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyWeatherComponent } from './component/daily-weather/daily-weather.component';

const routes: Routes = [
  {
    path: '',
    component: DailyWeatherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyWeatherRoutingModule {}
