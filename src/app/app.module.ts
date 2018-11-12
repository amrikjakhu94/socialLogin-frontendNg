import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSocialModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'ng-social';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component'; 
import { ApiService } from './core/services/api.service';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { JwtService } from './core/services/jwt.service';
import { DashboardComponent } from './dashboard/dashboard.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("345595742866289")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("253869210750-eh30e5beuj4qkabs7nc5iacpiokvvejc.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    SetnewpasswordComponent,
    ForgotpasswordComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgSocialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    ApiService,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
