import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrimOrderComponent } from './confrim-order.component';

describe('ConfrimOrderComponent', () => {
  let component: ConfrimOrderComponent;
  let fixture: ComponentFixture<ConfrimOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfrimOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfrimOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
