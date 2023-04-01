import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CodeInputModule,]
})
export class LoginPage {

  constructor(private router: Router) { }
  
  goToPage() {
    this.router.navigate(['tabs']);
  }
}
