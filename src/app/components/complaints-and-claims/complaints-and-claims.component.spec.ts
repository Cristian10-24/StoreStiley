import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsAndClaimsComponent } from './complaints-and-claims.component';

describe('ComplaintsAndClaimsComponent', () => {
  let component: ComplaintsAndClaimsComponent;
  let fixture: ComponentFixture<ComplaintsAndClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsAndClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsAndClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
