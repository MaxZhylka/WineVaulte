import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsWineComponent } from './steps-wine.component';

describe('StepsWineComponent', () => {
  let component: StepsWineComponent;
  let fixture: ComponentFixture<StepsWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsWineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepsWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
