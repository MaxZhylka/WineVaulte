import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineShopSheetComponent } from './wine-shop-sheet.component';

describe('WineShopSheetComponent', () => {
  let component: WineShopSheetComponent;
  let fixture: ComponentFixture<WineShopSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WineShopSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WineShopSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
