// Built-in
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from './../modules/shared/shared.module';

// Init..
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Components
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

// Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CatchErrorInterceptor } from './interceptors/catch-error.interceptor';

@NgModule({
  declarations: [AppComponent, SliderComponent, FooterComponent, NavComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, SharedModule, AppRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
