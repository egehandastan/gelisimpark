import { Component, OnInit } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlertifyService } from '../services/alertify.service';
import { Cards } from './cards';
declare let alertify:any;
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }
  title = "Product List"
  filterText=""
  products: Cards[] = [
    { id: 1, name: "Çanta", price: 2699, categoryId: 1, description: "Moschino Çanta", image: "assets/images/çanta.jfif" },
    { id: 2, name: "Ayakkabı", price: 18499, categoryId: 2, description: "Giuseppe Zanotti Sneakers",image: "assets/images/ayakkabı.jfif" },
    { id: 3, name: "Şapka", price: 9999, categoryId: 3, description: "Prada Siyah Logolu Şapka",image: "assets/images/sapka.jfif" },
    { id: 4, name: "Sweatshirt", price: 29499, categoryId: 4, description: "Dolce&Gabbana Sweatshirt",image: "assets/images/sweatshirt.jfif" }
  ]

  ngOnInit(): void {
  }
  addToCart(product: any){
    alertify.success("Sepete eklendi")

  }

}
