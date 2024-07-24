import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyWeatherComponent } from './component/daily-weather/daily-weather.component';
import { DailyWeatherRoutingModule } from './daily-weather-routing.module';

@NgModule({
  declarations: [DailyWeatherComponent],
  imports: [CommonModule, DailyWeatherRoutingModule],
})
export class DailyWeatherModule {}
