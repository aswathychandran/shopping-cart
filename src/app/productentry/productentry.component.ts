import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
productId:number
productName:string
productPrice:number
productDescription:string

save(){
  console.log(this.productId)

 //creating an obj store those datas
  let p:Product=new Product(this.productId,this.productName,this.productPrice,this.productDescription)
 console.log(p)

 //storing that datas to local storage
 localStorage.setItem("1",JSON.stringify(p))
 var productlist=localStorage.get("1")
 console.log(productlist)

var l=localStorage.length
if(l>1){
  var i=l+1
  localStorage.setItem(i.toString(),JSON.stringify(p))
  
 
}
else{
  localStorage.setItem("1",JSON.stringify(p))
  
}




}
}