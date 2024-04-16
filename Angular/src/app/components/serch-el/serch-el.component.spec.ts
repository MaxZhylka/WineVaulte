import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchElComponent } from './serch-el.component';

describe('SerchElComponent', () => {
  let component: SerchElComponent;
  let fixture: ComponentFixture<SerchElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerchElComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerchElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
