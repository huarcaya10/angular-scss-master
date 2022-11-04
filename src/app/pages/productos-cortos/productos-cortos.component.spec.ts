import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCortosComponent } from './productos-cortos.component';

describe('ProductosCortosComponent', () => {
  let component: ProductosCortosComponent;
  let fixture: ComponentFixture<ProductosCortosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCortosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosCortosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
