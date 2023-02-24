import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{

  private sub$!: Subscription;

  itemsOnCart = 0
  totalOnCart = 0

  constructor(
    private storageService: StorageService
  ){}

  ngOnInit(): void {
    this.storageService.myCart$
    .subscribe(products => {
      this.itemsOnCart = products.length;
      this.totalOnCart = this.storageService.getTotalItemsOnMyCart();
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }
}
