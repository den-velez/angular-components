import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { ProductsService} from '../../services/products.service'
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productsService:ProductsService, private storageService: StorageService) {
    this.productList = this.storageService.getItemsOnMyCart();
  }

  productList: Product[] = []
  itemsAdded = 0
  totalItemsAdded = 0

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => this.productList = data)
  }

  addProductToCard(product: Product){
    this.storageService.addProduct(product)
    this.itemsAdded = this.storageService.getItemsOnMyCart().length
    this.totalItemsAdded = this.storageService.getTotalItemsOnMyCart()
  }
}
