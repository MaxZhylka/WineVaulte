import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZukerComponent } from './zuker.component';

describe('ZukerComponent', () => {
  let component: ZukerComponent;
  let fixture: ComponentFixture<ZukerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZukerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZukerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
