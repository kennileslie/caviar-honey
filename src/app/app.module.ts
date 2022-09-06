import { MatIconModule } from '@angular/material/icon';
import { CtaComponent } from './modules/home/components/cta/cta.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { RadialBeeComponent } from './shared/components/radial-bee/radial-bee.component';
import { PropertiesComponent } from './modules/home/components/properties/properties.component';
import { MultiFloralComponent } from './modules/home/components/multi-floral/multi-floral.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';

import { LoginComponent } from './modules/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { InventoryComponent } from './modules/home/components/inventory/inventory.component';
import { VectorComponent } from './modules/home/components/vector/vector.component';
import { HomeComponent } from './modules/home/home.component';
import { HeroComponent } from './modules/home/components/hero/hero.component';
import { AboutComponent } from './modules/home/components/about/about.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CtaFormComponent } from './modules/home/components/cta/cta-form/cta-form.component';

import { TransitionComponent } from './modules/home/components/transition/transition.component';
import { AuthTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { ItemsListComponent } from './modules/pages/items-list/items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    RadialBeeComponent,
    PropertiesComponent,
    MultiFloralComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    InventoryComponent,
    VectorComponent,
    HomeComponent,
    HeroComponent,
    AboutComponent,
    CtaComponent,
    CtaFormComponent,
    TransitionComponent,
    ItemsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
