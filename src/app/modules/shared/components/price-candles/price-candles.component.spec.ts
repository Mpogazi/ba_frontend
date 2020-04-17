import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCandlesComponent } from './price-candles.component';

describe('PriceCandlesComponent', () => {
  let component: PriceCandlesComponent;
  let fixture: ComponentFixture<PriceCandlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCandlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
