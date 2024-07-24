import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map, Observable } from 'rxjs';
import { ILatAndLon } from '../../../core/interfaces/ILatAndLon.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GeoCodingService {
  private readonly baseUrl: string = environment.geoCodingUrl;
  private readonly apiKey: string = environment.apiKey;
  private readonly limit: number = 1;
  private readonly httpClient = inject(HttpClient);

  getLatAndLon(city: string): Observable<ILatAndLon> {
    const apiUrl = `${this.baseUrl}?q=${city}&limit=${this.limit}&appid=${this.apiKey}`;
    return this.httpClient.get<ILatAndLon[]>(apiUrl).pipe(
      map(response => {
        const [location] = response;
        return { lat: location.lat, lon: location.lon };
      }),
    );
  }
}
