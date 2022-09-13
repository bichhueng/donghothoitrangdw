import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';




const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'header',component:HeaderComponent}, 
  {path:'footer',component:FooterComponent}, 
  {path:'products',component:ProductsComponent}, 
  {path:'detail/:maMH',component:DetailComponent},  
  {path:'cart',component:CartComponent},  
  {path:'contact',component:ContactComponent}, 
  {path:'about',component:AboutComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
