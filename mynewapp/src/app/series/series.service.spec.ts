/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SeriesService } from './series.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { SeriesComponent } from './series.component';

describe('Service: Series', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [SeriesService],
      declarations: [AppComponent, SeriesComponent]
    });
  });

  it('should ...', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));
});
