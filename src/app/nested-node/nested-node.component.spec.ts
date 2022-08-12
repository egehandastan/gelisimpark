import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNodeComponent } from './nested-node.component';

describe('NestedNodeComponent', () => {
  let component: NestedNodeComponent;
  let fixture: ComponentFixture<NestedNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
