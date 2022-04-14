
import { CognitoService } from '../service/cognito.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { EmployeeDataService } from '../service/aws-skill-tracker.services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokenDetails: any;
  token: any;
  form!: FormGroup;
  employees!: Employee[];
  tempCode!: string;
  urlParams2!: URLSearchParams;

  constructor(private awsCognitoService: ReactiveFormsModule, private fb: FormBuilder,private httpClient: HttpClient
    ,private employeeDataService: EmployeeDataService ) { }
  searchBy: string = "";
  searchValue: string = "";

  ngOnInit(): void {
    console.log('Token: ', localStorage.getItem('token'));
    this.buildForm();

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));
      console.log(this.tokenDetails);
    }
    
  }

  logout(): void {
 
  } 

  buildForm(): void {  
    this.form = this.fb.group({
      searchBy: new FormControl(''),
      searchValue: new FormControl('')     
    });
  }  

  search(filters: any): void {
    this.searchBy=this.form.get('searchBy')?.value;
    this.searchValue =this.form.get('searchValue')?.value;
    console.log('searchValue:>>>', this.form.get('searchValue')?.value);

  

    this.employeeDataService.searchEmploye(this.searchBy, this.searchValue)   
      .subscribe((data:any) => {
        console.log(data);
        this.employees = data;        
      });

  }
}
