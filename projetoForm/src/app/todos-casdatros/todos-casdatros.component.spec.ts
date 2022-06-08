import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCasdatrosComponent } from './todos-casdatros.component';

describe('TodosCasdatrosComponent', () => {
  let component: TodosCasdatrosComponent;
  let fixture: ComponentFixture<TodosCasdatrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosCasdatrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosCasdatrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
