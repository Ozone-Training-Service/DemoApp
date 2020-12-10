import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtPageComponent } from './firt-page.component';

describe('FirtPageComponent', () => {
  let component: FirtPageComponent;
  let fixture: ComponentFixture<FirtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirtPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
