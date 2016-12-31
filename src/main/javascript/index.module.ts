import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IndexComponent } from "./index.component";

@NgModule( {
  imports: [BrowserModule],
  declarations: [IndexComponent],
  bootstrap: [IndexComponent]
} )
export class IndexModule {
  // nothing yet
}