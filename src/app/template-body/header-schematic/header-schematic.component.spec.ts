import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSchematicComponent } from './header-schematic.component';

describe('HeaderSchematicComponent', () => {
  let component: HeaderSchematicComponent;
  let fixture: ComponentFixture<HeaderSchematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSchematicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
