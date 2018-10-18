import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCollectionComponent } from './firebase-collection.component';

describe('FirebaseCollectionComponent', () => {
  let component: FirebaseCollectionComponent;
  let fixture: ComponentFixture<FirebaseCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
