import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// import { Test } from './app/test';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
// bootstrapApplication(Test, appConfig);
