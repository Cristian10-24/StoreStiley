import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { FirstSectionComponent } from './components/home/first-section/first-section.component';
import { SecondSectionComponent } from './components/home/second-section/second-section.component';
import { ThirdSectionComponent } from './components/home/third-section/third-section.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { PromDescComponent } from './components/prom-desc/prom-desc.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/sign-up/forget-password/forget-password.component';
import { FormRegisterComponent } from './components/sign-up/form-register/form-register.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ProductsComponent } from './components/inventory/products/products.component';
import { CreateInventoryComponent } from './components/inventory/create-inventory/create-inventory.component';
import { ViewInventoryComponent } from './components/inventory/view-inventory/view-inventory.component';
import { PromotionsComponent } from './components/prom-desc/promotions/promotions.component';
import { DiscountsComponent } from './components/prom-desc/discounts/discounts.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceDetailComponent } from './components/invoice/invoice-detail/invoice-detail.component';
import { ScoreComponent } from './components/score/score.component';
import { ComplaintsAndClaimsComponent } from './components/complaints-and-claims/complaints-and-claims.component';
import { SaleHistoryComponent } from './components/sale-history/sale-history.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    ContactUsComponent,
    PromDescComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    FormRegisterComponent,
    InventoryComponent,
    ProductsComponent,
    CreateInventoryComponent,
    ViewInventoryComponent,
    PromotionsComponent,
    DiscountsComponent,
    InvoiceComponent,
    InvoiceDetailComponent,
    ScoreComponent,
    ComplaintsAndClaimsComponent,
    SaleHistoryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
