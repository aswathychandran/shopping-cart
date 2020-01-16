import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
service:ProductService
productlist:any

  constructor(service:ProductService) {
    this.service=service
   }

  ngOnInit() {
    this.service.getProduct().subscribe(list=>{
      this.productlist=list
      console.log(this.productlist)
    })
  }
  addtocart(i){
    this.service.cart.push(i)
    console.log(this.service)
    console.log(i)

    
    
    
  }
  

  
    
  

}
