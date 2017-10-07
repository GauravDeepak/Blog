import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveblogComponent } from './loveblog.component';

describe('LoveblogComponent', () => {
  let component: LoveblogComponent;
  let fixture: ComponentFixture<LoveblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
