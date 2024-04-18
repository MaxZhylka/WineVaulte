import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoZoneSliderComponent } from './photo-zone-slider.component';

describe('PhotoZoneSliderComponent', () => {
  let component: PhotoZoneSliderComponent;
  let fixture: ComponentFixture<PhotoZoneSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoZoneSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoZoneSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
