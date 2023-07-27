import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappoinmentsComponent } from './bookappoinments.component';

describe('BookappoinmentsComponent', () => {
  let component: BookappoinmentsComponent;
  let fixture: ComponentFixture<BookappoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookappoinmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookappoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
