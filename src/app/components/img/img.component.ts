import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  imageDefault = './assets/images/iphone.png';

  @Input() img: string = 'https://www.w3schools.com/howto/img_avatar.png';
  @Output() loaded = new EventEmitter<string>();

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    this.loaded.emit(this.img);
  }
}
