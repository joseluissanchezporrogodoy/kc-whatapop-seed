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
    let valor;
    valor =  localStorage.getItem(this.productoID.toString());
    if (valor != null) {
      //Eliminar
      if (typeof(Storage) !== 'undefined') {
        localStorage.removeItem(this.productoID.toString());
      }
    }else {
      //Guardar
      if (typeof(Storage) !== 'undefined') {
        localStorage.setItem(this.productoID.toString(), this.productoID.toString());
      }
    }
  }

  isFavorite(): string {
    let valor;
    valor =  localStorage.getItem(this.productoID.toString());
     if (valor != null) {
      return 'fa-star';
     }
     return 'fa-star-o';
  }
}
