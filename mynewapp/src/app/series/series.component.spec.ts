import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { SeriesComponent } from './series.component';
import { SeriesService } from './series.service';
import { Serie } from './serie';

describe('BookListComponent', () => {
 let component: SeriesComponent;
 let fixture: ComponentFixture<SeriesComponent>;
 let debug: DebugElement;

 beforeEach(waitForAsync(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ SeriesComponent ],
     providers: [ SeriesService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(SeriesComponent);
   component = fixture.componentInstance;
   component.series = [
     new Serie(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(), faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });



});