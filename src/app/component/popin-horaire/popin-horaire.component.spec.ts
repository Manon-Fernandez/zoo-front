import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinHoraireComponent } from './popin-horaire.component';

describe('PopinHoraireComponent', () => {
  let component: PopinHoraireComponent;
  let fixture: ComponentFixture<PopinHoraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopinHoraireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopinHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
