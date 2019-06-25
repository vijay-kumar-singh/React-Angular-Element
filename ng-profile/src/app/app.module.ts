import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[
    ProfileComponent
  ]
})
export class AppModule {
  constructor(private injector:Injector){

  }

  ngDoBootstrap() {
    const el = createCustomElement(ProfileComponent, { injector: this.injector });
    customElements.define('ng-profile', el);
   }
}
