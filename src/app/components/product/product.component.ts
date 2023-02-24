import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: 1,
    title: '',
    image: '',
    description: '',
    price: 0,
    category:''
  };

  @Output() addProduct = new EventEmitter<Product>();

  addToCart() {
    this.addProduct.emit(this.product)
  }

}
