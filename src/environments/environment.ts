// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //keycloakTokenUrl : "http://localhost:7070/auth/realms/REST_realm/protocol/openid-connect/token",
  //keycloakClient : "ClientUnico",
  //keycloakTokenUrl : "http://myKeyCloak:080/auth/realms/REST_realm/protocol/openid-connect/token",
  keycloakTokenUrl : "http://localhost:7070/auth/realms/REST_realm/protocol/openid-connect/token",
  keycloakClient : "REST-app",
  keycloakCLientSecret : "4d90df6e-7dba-4edf-8a76-6b5e5085f8e8",
  portainerTokenUrl : "http://localhost:9000/api/auth",
  //portainerTokenUrl : "http://portainer:9000/api/auth",
  portainerUser : "admin",
  portainerPassword : "rootPassword"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
