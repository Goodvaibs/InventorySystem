import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PopupServiceService } from 'src/app/_Service/popup-service.service';
import { ItemsService } from 'src/app/_Service/items.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ItemsService, PopupServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
