import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import User from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  warning: string = '';
  success: boolean = false;
  loading: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    if (this.user.userName != '') {
      this.loading = true;
      this.auth.login(this.user).subscribe({
        next: (success) => {
          this.success = true;
          this.warning = '';
          this.loading = false;
          localStorage.setItem('access_token', success.token);
          this.router.navigate(['/newReleases']);
        },
        error: (err) => {
          this.warning = err.error.message;
          this.loading = false;
        },
      });
    }
  }
}
