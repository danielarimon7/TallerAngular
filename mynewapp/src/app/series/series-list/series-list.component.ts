import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private seriesService: SeriesService) { }

  getSeries(): void {
    this.seriesService.getSeriesList().subscribe((series) => {
      this.series = series;
    });
  }
  ngOnInit() {
    this.getSeries();
  }

}
