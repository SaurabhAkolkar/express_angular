import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:5500/api/v1/customer';
  getAllCustomerData() {
    return this.http.get(this.url);
  }
  createCustomerData(data: any) {
    console.log(data);
    return this.http.post('http://localhost:5500/api/v1/customer', data);
  }
  deleteCustomer(id: any) {
    return this.http.delete(`http://localhost:5500/api/v1/customer/${id}`);
  }
}
