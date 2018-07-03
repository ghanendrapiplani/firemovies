// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyD1h7arsTm2Py3aCWCzSpazs_bM4HwD_F8',
    authDomain: 'testdbwithformatteddata.firebaseapp.com',
    databaseURL: 'https://testdbwithformatteddata.firebaseio.com',
    projectId: 'testdbwithformatteddata',
    storageBucket: 'testdbwithformatteddata.appspot.com',
    messagingSenderId: '421521273176'
  },
  movies_Db: {
    'basePath': 'https://thawing-chamber-19957.herokuapp.com/'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
