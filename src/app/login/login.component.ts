import { Component, inject } from '@angular/core';
import { AuthHandlerService } from '../auth-handler.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService : AuthHandlerService = inject(AuthHandlerService);
  private formBuilder = inject(FormBuilder);
  public loginForm : FormGroup = this.formBuilder.group({
    username : ['', Validators.required],
    password : ['', Validators.required],
  });

  public isInvalid(path : string, validType : string) : boolean{
    let ent = this.loginForm.get(path);
    if(!ent?.touched){
      return false;
    }
    return ent?.hasError(validType);
  }

  public login() : void {
    let usrnm: string = this.loginForm.get('username')?.value;
    let pswd: string = this.loginForm.get('password')?.value;
    this.authService.ObtainAuthentication(usrnm, pswd).subscribe({
      next: (response) => {
        if (response.success) {
          console.log(response);
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
