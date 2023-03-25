import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInfo } from '../model/home/image-link-base';
import { ProductDetailService } from './service/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productInfo$!: Observable<ProductInfo>;

  constructor(private route: ActivatedRoute, private productDetailService: ProductDetailService) {
  }

  ngOnInit(): void {
    const productNo = this.route.snapshot.paramMap.get('productNo') ?? '';
    this.productInfo$ = this.productDetailService.getProductDetail(productNo.trim());
  }

  goBack(): void{
    window.history.back();
  }
}

