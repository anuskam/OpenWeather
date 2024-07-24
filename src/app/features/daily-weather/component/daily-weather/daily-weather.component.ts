import { Component, inject, OnInit } from '@angular/core';
import { GeoCodingService } from '../../services/geo-coding.service';
import { ILatAndLon } from '../../../../core/interfaces/ILatAndLon.interface';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrl: './daily-weather.component.scss',
})
export class DailyWeatherComponent implements OnInit {
  private readonly geoCodingService = inject(GeoCodingService);

  ngOnInit(): void {
    this.getLatAndLon();
  }

  getLatAndLon(): void {
    this.geoCodingService
      .getLatAndLon('London')
      .subscribe((data: ILatAndLon) => {
        console.log(data);
      });
  }
}
