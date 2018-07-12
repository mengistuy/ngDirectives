import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnorderedListComponentComponent } from './unordered-list-component.component';

describe('UnorderedListComponentComponent', () => {
  let component: UnorderedListComponentComponent;
  let fixture: ComponentFixture<UnorderedListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnorderedListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnorderedListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
