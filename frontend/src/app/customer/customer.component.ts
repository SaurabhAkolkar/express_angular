import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(private customer: CustomerService) {}
  allCustomerData: any = [];
  form = new FormGroup({
    cust_name: new FormControl('', [Validators.required]),
    balance: new FormControl('', [Validators.required]),
  });

  customerData(data: any) {
    this.customer.createCustomerData(data.value).subscribe((result: any) => {
      console.log(result);
      this.form.reset();
      this.getAllAdminData();
    });
  }
  getAllAdminData() {
    this.customer.getAllCustomerData().subscribe((result: any) => {
      console.log(result.data);

      this.allCustomerData = result.data;
      console.log(this.allCustomerData);
    });
  }
  isDeleteId: any;
  deleteAdminData(id: any) {
    this.isDeleteId = id;
  }
  deleteDataNow() {
    this.customer.deleteCustomer(this.isDeleteId).subscribe((result: any) => {
      console.log(result);
      this.getAllAdminData();
    });
  }

  ngOnInit(): void {
    this.getAllAdminData();
  }
}
