import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      image: './assets/images/iphone.png',
      description: 'This is the first product',
      price: 100,
    },
    {
      id: 2,
      name: 'Producto 2',
      image: './assets/images/iphone.png',
      description: 'This is the first product',
      price: 200,
    },
    {
      id: 3,
      name: 'Producto 3',
      image: './assets/images/iphone.png',
      description: 'This is the first product',
      price: 300,
    },
    {
      id: 4,
      name: 'Producto 4',
      image: './assets/images/iphone.png',
      description: 'This is the first product',
      price: 400,
    },
    {
      id: 5,
      name: 'Producto 5',
      image: './assets/images/iphone.png',
      description: 'This is the first product',
      price: 500,
    },
  ];

  productsInCard: Product[] = []
  itemsAdded = 0
  totalItemsAdded = 0

  addProductToCard(product: Product){
    console.log(product)
    this.productsInCard.push(product)
    this.itemsAdded = this.productsInCard.length
    this.totalItemsAdded = this.productsInCard.reduce((sum, item) => sum + item.price, 0)
  }
}
