import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { CONSTANTS_PROVIDERS } from './app/app-constants';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,[CONSTANTS_PROVIDERS])
  .catch(err => { console.log(err) });
