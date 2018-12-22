import { Component } from '@angular/core';
import {SpaConfigService} from '../spa/services/spa-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private SpaConfigService: SpaConfigService) {
    const config: SpaConfigService = {
      socialIcons: [
        {imageFile: 'src/imgs/facebook.png', alt: 'Facebook', url: 'http://facebook.com'},
        {imageFile: 'src/imgs/instagram.png', alt: 'Instagram', url: 'http://www.instagram.com'},
        {imageFile: 'src/imgs/twitter.png', alt: 'Twitter', url: 'http://twitter.com'},
        {imageFile: 'src/imgs/whatsapp.png', alt: 'Whatsapp', url: 'http://www.whatsapp.com'}
      ],
      showUserControls: true
    };
    SpaConfigService.configure(config);
  }

}
