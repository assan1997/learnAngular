import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAtributeDirectiveComponent } from './custom-atribute-directive.component';

describe('CustomAtributeDirectiveComponent', () => {
  let component: CustomAtributeDirectiveComponent;
  let fixture: ComponentFixture<CustomAtributeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAtributeDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAtributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
