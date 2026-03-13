import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe isso

@Component({
  selector: 'app-root',
  standalone: true, // Garanta que isso seja true
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Verifique se o array 'links' está definido aqui dentro
  links = [
    { label: 'Método CARB', url: 'https://...' },
    { label: 'Agende sua consulta', url: 'https://...' },
    { label: 'Começar acompanhamento', url: 'https://...' }
  ];
}