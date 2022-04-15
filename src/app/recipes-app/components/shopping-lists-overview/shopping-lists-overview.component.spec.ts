import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsOverviewComponent } from './shopping-lists-overview.component';

describe('ShoppingListsOverviewComponent', () => {
  let component: ShoppingListsOverviewComponent;
  let fixture: ComponentFixture<ShoppingListsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
