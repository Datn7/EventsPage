import { TestBed } from '@angular/core/testing';

import { EventRouteGuard } from './event-route.guard';

describe('EventRouteGuard', () => {
  let guard: EventRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
