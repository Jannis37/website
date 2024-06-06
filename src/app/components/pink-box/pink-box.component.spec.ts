import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkBoxComponent } from './pink-box.component';

describe('PinkBoxComponent', () => {
  let component: PinkBoxComponent;
  let fixture: ComponentFixture<PinkBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinkBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinkBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
