import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardResidentialAreaComponent } from './dasboard-residential-area.component';

describe('DasboardResidentialAreaComponent', () => {
  let component: DasboardResidentialAreaComponent;
  let fixture: ComponentFixture<DasboardResidentialAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardResidentialAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardResidentialAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
