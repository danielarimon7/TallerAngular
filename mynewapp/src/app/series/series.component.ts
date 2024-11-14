import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  constructor( private seriesService: SeriesService) { }
  

  getSeries(){
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

  ngOnInit() {
    this.series = this.getSeriesList();
  }

}
