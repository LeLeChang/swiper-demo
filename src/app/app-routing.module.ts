import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { RoutePaths } from './route-paths';

const routes: Routes = [
  { path: RoutePaths.home, component: HomeComponent },
  { path: `${RoutePaths.productDetail}/:productNo`, component: ProductDetailComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
