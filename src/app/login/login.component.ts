import { Component, inject, signal } from '@angular/core';
import { AuthHandlerService } from '../auth-handler.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public emailAddress = signal<string>('');
  public password = signal<string>('');
  private authService : AuthHandlerService = inject(AuthHandlerService);

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
