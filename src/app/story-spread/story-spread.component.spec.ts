import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySpreadComponent } from './story-spread.component';

describe('StorySpreadComponent', () => {
  let component: StorySpreadComponent;
  let fixture: ComponentFixture<StorySpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorySpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorySpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
