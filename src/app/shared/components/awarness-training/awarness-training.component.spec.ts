import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarnessTrainingComponent } from './awarness-training.component';

describe('AwarnessTrainingComponent', () => {
  let component: AwarnessTrainingComponent;
  let fixture: ComponentFixture<AwarnessTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwarnessTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwarnessTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
