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
      localStorage.setItem(this.productoID.toString(), this.productoID.toString());
    }
  }

  isFavorite(productId: number): boolean {
    let valor;

    valor =  localStorage.getItem(this.productoID.toString());
    if(valor != null) {
      console.log("almacen");
      console.log(valor);
    }
    return null;
  }
}
