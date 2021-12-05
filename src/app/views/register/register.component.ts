import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import RegisterUser from 'src/app/RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUser: RegisterUser = new RegisterUser();
  warning: string = '';
  success: boolean = false;
  loading: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    if (this.registerUser.userName != '') {
      this.loading = true;
      this.auth.register(this.registerUser).subscribe({
        next: (success) => {
          this.success = true;
          this.warning = '';
          this.loading = false;
        },
        error: (err) => {
          this.warning = err.error.message;
        },
      });
    }
  }
}
