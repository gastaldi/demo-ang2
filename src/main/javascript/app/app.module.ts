import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

var moduleImports: Array<any[] | any | ModuleWithProviders> = [
  BrowserModule
];
@NgModule( {
  imports: moduleImports,
  declarations: [AppComponent],
  bootstrap: [AppComponent]
} )
export class AppModule {
}