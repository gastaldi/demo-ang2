import "core-js/client/shim";
import "reflect-metadata";
import "zone.js/dist/zone";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { IndexModule } from "./index.module";

document.addEventListener( "DOMContentLoaded", () => {
  platformBrowserDynamic().bootstrapModule( IndexModule );
} );