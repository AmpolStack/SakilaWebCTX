import { Component, Input, input, model, signal } from '@angular/core';
import { AuthHandlerService } from '../auth-handler.service';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  public emailAddress = signal<string>('');
  public password = signal<string>('');

  constructor(private authService: AuthHandlerService) {
  }

  login(username: string, password: string) {
    this.authService.ObtainAuthentication(username, password).subscribe({
      next: (response) => {
        if (response.success) {
          console.log(response.data);
          // Aquí puedes guardar el token o redirigir
        } else {
          console.error('Error en login:', response.error);
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      }
    });
  }
}
