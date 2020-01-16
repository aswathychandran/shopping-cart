import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  service:ProductService
  data:any
  amount:any[]=[]
  sum:any=0
  price:any
  i:any
  increment:any
  decrement:any

  constructor(service:ProductService) {
    this.service=service
   }

  ngOnInit() {
    this.data=this.service.cart
  }
  deletefromcart(i){
    this.data.splice(this.data.indexOf(i),1)
    this.data=this.service.cart

    console.log(this.data)
    console.log(i)
   }

   incr(i){
    i.quantity =i.quantity+1
     this.increment=i.quantity
  }
   
  decr(i){
    i.quantity=i.quantity-1
    this.decrement=i.quantity
  }
    
   proceedtopay(i){
    let bill=this.data.map(({price})=>price)
    console.log(bill)
    let qty=this.data.map(({quantity})=>quantity)
    console.log(qty)

    this.sum=0
    for(let i=0;i<bill.length;i++){
      this.sum=this.sum+bill[i]*qty[i]
    }
    console.log(this.sum)
    }

 
  
}
