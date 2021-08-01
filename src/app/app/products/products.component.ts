import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      description: '',
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('name', form.value.name);
    console.log('description', form.value.description);
  }
  
  constructor(private fb: FormBuilder) {}

  

}
