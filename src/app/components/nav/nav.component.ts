import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule, MatListModule, MatSidenavModule, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavComponent {
  showFiller = false;
}
