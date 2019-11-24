import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipGraphComponent } from './ownership-graph.component';

describe('OwnershipGraphComponent', () => {
  let component: OwnershipGraphComponent;
  let fixture: ComponentFixture<OwnershipGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnershipGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
