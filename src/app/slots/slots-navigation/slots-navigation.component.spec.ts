import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsNavigationComponent } from './slots-navigation.component';

describe('SlotsNavigationComponent', () => {
  let component: SlotsNavigationComponent;
  let fixture: ComponentFixture<SlotsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
