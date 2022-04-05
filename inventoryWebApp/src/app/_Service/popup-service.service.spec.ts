import { TestBed } from '@angular/core/testing';

import { PopupServiceService } from './popup-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';

describe('PopupServiceService', () => {
  let service: PopupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [PopupServiceService,{ provide: LocationStrategy, useClass: MockLocationStrategy },]
    });
    service = TestBed.inject(PopupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
