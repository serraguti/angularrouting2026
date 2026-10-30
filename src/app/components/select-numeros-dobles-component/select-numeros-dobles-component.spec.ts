import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectNumerosDoblesComponent } from './select-numeros-dobles-component';

describe('SelectNumerosDoblesComponent', () => {
  let component: SelectNumerosDoblesComponent;
  let fixture: ComponentFixture<SelectNumerosDoblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectNumerosDoblesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectNumerosDoblesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
