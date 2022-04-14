// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://m3sqg9vzjj.execute-api.us-east-1.amazonaws.com/dev/admin', 
  api_url1: 'http://localhost:8081/admin',
  api_url2: 'http://localhost:8081/admin',
  api_key:'UAuLFcaJCG8Ybcoyk01Ft1uTX1mourpwaZb4qcTf',
  //logOut: 'http://localhost:8090/admin', 
  cognito: {
    userPoolId: 'us-east-1_mpvghsblN',
    userPoolWebClientId: '510m4es8tecn2k80qdv6msi6o6',
  },

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
