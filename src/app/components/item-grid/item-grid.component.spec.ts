import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGridComponent } from './item-grid.component';

describe('ItemGridComponent', () => {
  let component: ItemGridComponent;
  let fixture: ComponentFixture<ItemGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
