import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiaApprovalComponent } from './bia-approval.component';

describe('BiaApprovalComponent', () => {
  let component: BiaApprovalComponent;
  let fixture: ComponentFixture<BiaApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiaApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiaApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
