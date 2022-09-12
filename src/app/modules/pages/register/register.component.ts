import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  data = {
    username: '',
    password: '',
    role: 'user',
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.register(this.data).subscribe((res) => {
      if (res.status === 'success') {
        this.router.navigate(['/home']);
      }
    });
  }
}
