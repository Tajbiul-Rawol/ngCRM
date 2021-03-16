import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileModule } from "./profile/profile.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProfileComponent } from "./profile/list-profile/list-profile.component";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
