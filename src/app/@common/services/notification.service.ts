import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { takeUntil } from 'rxjs';

import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private readonly router: Router,
    @Inject(TuiNotificationsService) private readonly notificationsService: TuiNotificationsService
  ) {}

  notifyViaToast(
    message: string,
    type: string,
    takeUntilValue?: any | null,
    routeTo?: string[] | null,
    settings: any = {}
  ) {
    let notification$;

    if (type === 'SUCCESS') {
      notification$ = this.notificationsService
        .show(message, {
          label: 'Success',
          status: TuiNotification.Success,
          ...settings,
        })
        .pipe(takeUntil(takeUntilValue ?? this.router.events));
    } else {
      notification$ = this.notificationsService
        .show(message, {
          label: 'Error',
          status: TuiNotification.Warning,
          ...settings,
        })
        .pipe(takeUntil(takeUntilValue ?? this.router.events));
    }

    if (!routeTo) {
      notification$.subscribe();
      return;
    }

    notification$.subscribe({
      complete: () => this.router.navigate(routeTo),
    });
  }
}
