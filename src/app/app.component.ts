import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'crafty';
  items!: MenuItem[];
  activeItem!: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['home']
      },
      {
        label: 'Browse',
        icon: 'pi pi-fw pi-folder',
        routerLink: ['recipe-browser']
      },
      {
        label: 'Entry',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['recipe-entry']
      },
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        routerLink: ['documentation']
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['settings']
      }
    ];

    this.activeItem = this.items[0];

  }
}
