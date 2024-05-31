import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectmanagersComponent } from './editprojectmanagers.component';

describe('EditprojectmanagersComponent', () => {
  let component: EditprojectmanagersComponent;
  let fixture: ComponentFixture<EditprojectmanagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditprojectmanagersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditprojectmanagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
