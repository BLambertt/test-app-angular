import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBlocComponent } from './message-bloc.component';

describe('MessageBlocComponent', () => {
  let component: MessageBlocComponent;
  let fixture: ComponentFixture<MessageBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
