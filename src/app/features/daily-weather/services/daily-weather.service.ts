import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from '../../../core/interfaces/IWeather.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DailyWeatherService {
  private httpClient = inject(HttpClient);
  public baseUrl = environment.apiUrl;
  public aggregation = environment.dailyAggregation;
  /* public 
  public 
  public 
  public  */
  /* getElements(): Observable<IWeather> {
    const apiUrll = 
  } */
}
