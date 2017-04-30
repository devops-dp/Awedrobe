import { Provider } from '@angular/core';
import { ConfigurationConstants } from './config-constants';
import { ViewConstants } from './view-constants';
export class AppConstants {
    public static APP_TITLE = `Awedrobe`;
}

export var CONSTANTS_PROVIDERS:Provider[] = [
  { provide:ConfigurationConstants, useClass: ConfigurationConstants},
  { provide:ViewConstants, useClass: ViewConstants }
];