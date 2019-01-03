import { Component, OnInit, Input, Renderer, ElementRef, HostListener, HostBinding} from '@angular/core';
import { MenuItem, MenuService } from 'src/spa/services/menu.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'spa-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  @HostBinding('class.parent-for-popup')
  @Input() parentIsPopup = true;
  mouseInPopup = false;
  mouseInItem = false;
  popupLeft = 0;
  popupTop = 42;
  isActiveRoute = false;
  constructor(private menuService: MenuService,
    private router: Router,
    private el: ElementRef,
    private renderer:Renderer) { }

  ngOnInit() {
    this.checkingActiveRoute(this.router.url);
    this.router.events.subscribe((event) => {
      if( event instanceof NavigationEnd) {
        this.checkingActiveRoute(event.url);
      }
    });
  }

  checkingActiveRoute(route: string): void {
    this.isActiveRoute = (route === this.item.route);
  }

  onPopupMouseLeave(event: Event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = false;  }
  }
  onPopupMouseEnter(event: Event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

@HostListener('mouseleave', ['$event'])
onMouseLeave(event): void {
  if (!this.menuService.isVertical) {
    this.mouseInItem = false;
  }
}

@HostListener('mouseenter')
onMouseEnter(): void {
 if (!this.menuService.isVertical) {
   if(this.item.submenu) {
     this.mouseInItem =true;
     if (this.parentIsPopup) {
       this.popupLeft = 160;
       this.popupTop = 0;
     }
   }
  }
}
}
