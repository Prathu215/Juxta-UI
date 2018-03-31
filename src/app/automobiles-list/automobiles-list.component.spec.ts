import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobilesListComponent } from './automobiles-list.component';

describe('AutomobilesListComponent', () => {
  let component: AutomobilesListComponent;
  let fixture: ComponentFixture<AutomobilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobilesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
