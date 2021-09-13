import { FilterByCatIdPipe } from './pipes/filter-by-cat-id.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CarouselItemComponent } from './home-page/carousel-item/carousel-item.component';
import { FeaturedItemComponent } from './home-page/featured-item/featured-item.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { CategoryComponent } from './shop-page/category/category.component';
import { ProductComponent } from './shop-page/product/product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchPipe } from './pipes/search.pipe';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './cart-page/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoverAnimationComponent } from './hover-animation/hover-animation.component';
import { AuthorPageComponent } from './author-page/author-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    ShopPageComponent,
    ContactPageComponent,
    CarouselItemComponent,
    FeaturedItemComponent,
    ShortenPipe,
    CategoryComponent,
    ProductComponent,
    FilterByCatIdPipe,
    OrderByPipe,
    ProductPageComponent,
    SearchPipe,
    CartPageComponent,
    ModalComponent,
    HoverAnimationComponent,
    AuthorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModalModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-left'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
