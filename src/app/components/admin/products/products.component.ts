import { TemplateRef, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( public modalService: BsModalService) { }
  ngOnInit(): void {
  }
  modalRef?: BsModalRef;
  posicionActualizar:number = 0;
  posicionVer:number =0;
  posicionAgregar =0;
  openModal(template: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template);
    this.posicionActualizar=position;
    this.d_nombre=this.products[this.posicionActualizar].name;
    this.d_descripcionn=this.products[this.posicionActualizar].description;
    this.d_Stoke=this.products[this.posicionActualizar].estado;
    this.d_Precio=this.products[this.posicionActualizar].price;
  }
  openModal1(template1: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template1);
    this.posicionVer=position;
    this.d_descripcionn=this.products[this.posicionVer].description;
    this.d_nombre=this.products[this.posicionVer].name;
    this.d_Stoke=this.products[this.posicionVer].estado;
    this.d_Precio=this.products[this.posicionVer].price;
  
  }
  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
  }



  d_nombre: string ="";
  d_descripcionn: string="";
  d_Stoke: string = "";
  d_Precio: number = 0;
 

  products: Product[] = [{
    name: "parquet",
    price: 2,
    image: "https://media.istockphoto.com/photos/sample-of-wood-chipboard-wooden-laminate-veneer-material-for-interior-picture-id1135678299?b=1&k=20&m=1135678299&s=612x612&w=0&h=JVmRpRls_0Pq9f5GT2EPtmWXbzlLMXGlKX6L4YOuKU8=",
    estado: "200",
    description: "laminado - cedro",
    porcentaje: "",
  }];
  
  addProducto(): void{
    const newProduct ={
      name: this.d_nombre,
      price: this.d_Precio,
      image: "",
      estado: this.d_Stoke,
      description: this.d_descripcionn,
      porcentaje: "",
    }
    this.products.push(newProduct);
    this.d_nombre ="";
    this.d_descripcionn="";
    this.d_Stoke= "";
    this.d_Precio= 0;
  }
  deleteProduct(position: number): void{
    this.products.splice(position,1);
  }
  actComprobante1(): void{
    
    const replace: any ={
      name: this.d_nombre,
      price: this.d_Precio,
      image: "",
      estado: this.d_Stoke,
      description: this.d_descripcionn,
      porcentaje: "",
    }
    this.products.splice(this.posicionActualizar,1,replace);
    this.d_descripcionn="";
    this.d_nombre="";
    this.d_Stoke="";
    this.d_Precio=0;
  }
  deleteProductos(position: number): void{
    this.products.splice(position,1);
  }

}
