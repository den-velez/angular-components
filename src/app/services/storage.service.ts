import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  private itemsOnMyCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  public myCart$ = this.myCart.asObservable();

  addProduct(product: Product): void {
    this.itemsOnMyCart.push(product);
    this.myCart.next(this.itemsOnMyCart)
  }

  getItemsOnMyCart(){
    return this.itemsOnMyCart;
  }

  getTotalItemsOnMyCart(){
    return this.itemsOnMyCart.reduce((sum, product) => sum + product.price, 0)
  }
}
