import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DataNewComponent} from './data-new.component';

describe('DataNewComponent', () => {
  let component: DataNewComponent;
  let fixture: ComponentFixture<DataNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataNewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
