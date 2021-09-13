import { AuthorPageComponent } from './author-page/author-page.component';

import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"products/:catId",
    component:ShopPageComponent
  },
  {
    path:"product/:id",
    component:ProductPageComponent
  },
  {
    path:"cart",
    component:CartPageComponent
  },

  {
    path:"contact",
    component:ContactPageComponent
  },
  {
    path:"author",
    component:AuthorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
