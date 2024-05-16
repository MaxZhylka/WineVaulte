import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocHelpComponent } from './doc-help.component';

describe('DocHelpComponent', () => {
  let component: DocHelpComponent;
  let fixture: ComponentFixture<DocHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
