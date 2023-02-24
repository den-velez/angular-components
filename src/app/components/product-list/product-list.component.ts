import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productsService:ProductsService) {}

  productList: Product[] = []

  productsInCard: Product[] = []
  itemsAdded = 0
  totalItemsAdded = 0

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => this.productList = data)
  }

  addProductToCard(product: Product){
    console.log(product)
    this.productsInCard.push(product)
    this.itemsAdded = this.productsInCard.length
    this.totalItemsAdded = this.productsInCard.reduce((sum, item) => sum + item.price, 0)
  }
}
