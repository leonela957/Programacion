import { Component,HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  dropdownAbierto = false;

toggleDropdown() {
  this.dropdownAbierto = !this.dropdownAbierto;
}

// Para cerrar cuando haces clic fuera
@HostListener('document:click', ['$event'])
onDocumentClick(event: Event) {
  const target = event.target as HTMLElement;
  if (!target.closest('.dropdown')) {
    this.dropdownAbierto = false;
  }
} 
}
