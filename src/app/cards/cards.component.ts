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

  gridColumns =5;
  constructor(private alertifyService:AlertifyService) { }
  title = "Product List"
  filterText=""
  products: Cards[] = [
    { id: 1, name: "Çanta", price: 2699, categoryId: 1, description: "Moschino Çanta", image: "assets/images/çanta.jfif" },
    { id: 2, name: "Ayakkabı", price: 18499, categoryId: 2, description: "Giuseppe Zanotti Sneakers",image: "assets/images/ayakkabı.jfif" },
    { id: 3, name: "Şapka", price: 9999, categoryId: 3, description: "Prada Siyah Logolu Şapka",image: "assets/images/sapka.jfif" },
    { id: 4, name: "Sweatshirt", price: 29499, categoryId: 4, description: "Dolce&Gabbana Sweatshirt",image: "assets/images/sweatshirt.jfif" },
    { id: 5, name: "Şapka", price: 9999, categoryId: 3, description: "Prada Siyah Logolu Şapka",image: "assets/images/sapka.jfif" },
    { id: 6, name: "Çanta", price: 2699, categoryId: 1, description: "Moschino Çanta", image: "assets/images/çanta.jfif" },
    { id: 7, name: "Ayakkabı", price: 18499, categoryId: 2, description: "Giuseppe Zanotti Sneakers",image: "assets/images/ayakkabı.jfif" },
    { id: 8, name: "Şapka", price: 9999, categoryId: 3, description: "Prada Siyah Logolu Şapka",image: "assets/images/sapka.jfif" },
    { id: 9, name: "Sweatshirt", price: 29499, categoryId: 4, description: "Dolce&Gabbana Sweatshirt",image: "assets/images/sweatshirt.jfif" },
    { id: 10, name: "Ayakkabı", price: 18499, categoryId: 2, description: "Giuseppe Zanotti Sneakers",image: "assets/images/ayakkabı.jfif" },
    { id: 11, name: "Sweatshirt", price: 29499, categoryId: 4, description: "Dolce&Gabbana Sweatshirt",image: "assets/images/sweatshirt.jfif" },
    { id: 12, name: "Çanta", price: 2699, categoryId: 1, description: "Moschino Çanta", image: "assets/images/çanta.jfif" },
    { id: 13, name: "Çanta", price: 2699, categoryId: 1, description: "Moschino Çanta", image: "assets/images/çanta.jfif" },
    { id: 14, name: "Ayakkabı", price: 18499, categoryId: 2, description: "Giuseppe Zanotti Sneakers",image: "assets/images/ayakkabı.jfif" },
    { id: 15, name: "Şapka", price: 9999, categoryId: 3, description: "Prada Siyah Logolu Şapka",image: "assets/images/sapka.jfif" },
    { id: 16, name: "Sweatshirt", price: 29499, categoryId: 4, description: "Dolce&Gabbana Sweatshirt",image: "assets/images/sweatshirt.jfif" },
    { id: 17, name: "Çanta", price: 2699, categoryId: 1, description: "Moschino Çanta", image: "assets/images/çanta.jfif" },
    { id: 18, name: "Ayakkabı", price: 18499, categoryId: 2, description: "Giuseppe Zanotti Sneakers",image: "assets/images/ayakkabı.jfif" },
    ]

  ngOnInit(): void {
  }
  addToCart(product: any){
    alertify.success("Sepete eklendi")

  }

}
