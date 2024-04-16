import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionHeaderComponent } from './production-header.component';

describe('ProductionHeaderComponent', () => {
  let component: ProductionHeaderComponent;
  let fixture: ComponentFixture<ProductionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
