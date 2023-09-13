import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  model: ProductRepository = new ProductRepository();

  // Style Binding Examples
  /* disabled = true;

  getClasses(id: number): string {
    let product = this.model.getProductById(id);
    return (product.price as number <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2 text-white ";
  } */

  // Property Binding Examples
  // product: Product = this.model.getProductById(1);

  // Class Binding Examples
  /* getClassMap(id: number): Object {
    let product = this.model.getProductById(id);
    return {
      "bg-success": product.price as number <= 1000,
      "bg-secondary": product.price as number > 1000,
      "text-center text-white": product.name == "Samsung S20 FE"
    }
  }

  getStyles(id: number) {
    let product = this.model.getProductById(id);
    return {
      fontWeight: "bold",
      fontStyle: "italic",
      color: product.price as number <= 1000 ? "gold" : "cornsilk"
    }
  } */

  // Event Binding Examples
  /* onSubmit($event: any) {
    $event.stopPropagation();
    console.log('Button clicked');
    console.log($event);
  }

  onDivClicked() {
    console.log('Div clicked');
  } */

  // Keyup Event Examples
  /* onKeyUp($event: any) {
    if ($event.keyCode === 13) {
      console.log($event.target.value);
    }
  }

  onKeyUpEnter(email: any) {
    console.log(email);
  } */

  // Two Way Binding Examples
  /* email = "company@email.com";

  onKeyUp() {
    console.log(this.email);
  } */

  // Built-in Pipes Examples
  // today: number = Date.now();
  // title: string = 'Angular Course';
  // students: number = 21536;
  // price: number = 395.9792;
  // completed: number = 0.26;

  text = 'Lorem ipsum dolor sit, amet conscestor adipicing elite mama bkk';
}