import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtempComponent } from './childtemp.component';

describe('ChildtempComponent', () => {
  let component: ChildtempComponent;
  let fixture: ComponentFixture<ChildtempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildtempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
