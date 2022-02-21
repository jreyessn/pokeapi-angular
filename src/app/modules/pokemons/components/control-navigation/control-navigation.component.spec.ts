import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlNavigationComponent } from './control-navigation.component';

describe('ControlNavigationComponent', () => {
  let component: ControlNavigationComponent;
  let fixture: ComponentFixture<ControlNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
