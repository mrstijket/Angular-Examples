import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
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

  // Custom Pipes Examples
  // text = 'Lorem ipsum dolor sit, amet conscestor adipicing elit memento mori';

  model: ProductRepository = new ProductRepository();

  // Angular Ng-Switch Examples
  // productName: string = this.model.getProductById(1).name as string;

  // Angular Ng-For and Change-Detection Examples
  // addProduct() {
  //   this.model.addProduct(new Product(6, "Xiaomi Redmi Note 7", "Price/Performance phone", "xiaomiredminote7.jpg", 270));
  // }

  // deleteProduct(product: Product) {
  //   this.model.deleteProduct(product);
  // }

  // updateProduct(product: Product) {
  //   product.name = "Updated";
  // }

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  log(x) {
    console.log(x);
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  getValidationErrors(state: any) {
    let controlName: string = state.name;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${controlName}`);
            break;
          case "minlength":
            messages.push(`Min 3 character for ${controlName}`);
            break;
          case "pattern":
            messages.push(`${controlName} contains unvalid characters`);
            break;
        }
      }
    }
    return messages;
  }
}