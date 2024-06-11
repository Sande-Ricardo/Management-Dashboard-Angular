import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingEnvironmentComponent } from './testing-environment.component';

describe('TestingEnvironmentComponent', () => {
  let component: TestingEnvironmentComponent;
  let fixture: ComponentFixture<TestingEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
