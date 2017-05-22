import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgNaoEncontradaComponent } from './pg-nao-encontrada.component';

describe('PgNaoEncontradaComponent', () => {
  let component: PgNaoEncontradaComponent;
  let fixture: ComponentFixture<PgNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
