import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  picker: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private service: UserService, private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstname : ['', [Validators.required, Validators.minLength(2)]],
      lastname : ['', [Validators.required, Validators.minLength(2)]],
      email : ['', [Validators.required, Validators.email]],
      birthday : ['', [Validators.required]]
    });
  }

  addUser(){
    this.service.addUser(this.userForm.value).subscribe(() => {
      this.router.navigate(['/show-users'])
    })

  }


}
