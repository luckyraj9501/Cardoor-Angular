import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesnpricesComponent } from './servicesnprices.component';

describe('ServicesnpricesComponent', () => {
  let component: ServicesnpricesComponent;
  let fixture: ComponentFixture<ServicesnpricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesnpricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesnpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
