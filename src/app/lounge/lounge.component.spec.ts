import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeComponent } from './lounge.component';

describe('LoungeComponent', () => {
  let component: LoungeComponent;
  let fixture: ComponentFixture<LoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoungeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
