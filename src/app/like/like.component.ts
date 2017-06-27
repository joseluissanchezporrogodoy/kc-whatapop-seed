import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() productoID: number;
  constructor() { }

  ngOnInit() {
  }
  onFavoriteClick(): void {
    console.log(this.productoID);
    //Guardar el producto
    if (typeof(Storage) !== "undefined") {
      // Setter
      //localStorage.setItem("pageSize", 10);
    }
  }

  isFavorite(productId: number): boolean {
    console.log("ha ejecutado");
    return null;
  }
}
