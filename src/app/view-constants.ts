import { Injectable } from '@angular/core';

@Injectable()
export class ViewConstants{
    APP_TITLE = `Awedrobe`;
    APP_TITLE_CAPS = this.APP_TITLE.toUpperCase();
    APP_TITLE_SMALL = this.APP_TITLE.toLowerCase();
    DEFAULT_DATE_FORMAT = 'DD-MM-YYYY';
    DEFAULT_TIME_FORMAT = 'HH:mm:ss';
    SUFFIX = `<sup class="red-txt">&alpha;</sup>`;
}