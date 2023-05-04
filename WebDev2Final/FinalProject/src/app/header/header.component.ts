import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { Output, EventEmitter} from '@angular/core';

const MOON = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 466.044 466.044" xml:space="preserve">
<path d="M280.631,466.044c-128.488,0-233.022-104.525-233.022-233.022C47.609,104.533,152.143,0,280.631,0    c41.228,0,81.798,10.974,117.336,31.718l20.468,11.957l-21.622,9.697c-74.945,33.62-123.359,108.354-123.359,190.396    c0,73.848,39.692,142.917,103.607,180.243l20.46,11.949l-21.614,9.697C345.765,459.183,313.706,466.044,280.631,466.044z     M280.631,24.394c-115.036,0-208.636,93.592-208.636,208.636s93.592,208.636,208.636,208.636c21.858,0,43.212-3.341,63.752-9.966    c-59.339-43.61-95.324-113.589-95.324-187.916c0-83.448,44.837-160.117,116.052-201.507    C338.612,30.523,309.813,24.394,280.631,24.394z"/>
</svg>`;
const MOON_FILLED =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 342.104 342.104" xml:space="preserve">
<path d="M206,342.104c-94.318,0-171.052-76.728-171.052-171.052C34.948,76.734,111.682,0,206,0    c30.264,0,60.045,8.055,86.132,23.283l15.025,8.777l-15.872,7.118c-55.015,24.679-90.553,79.538-90.553,139.762    c0,54.209,29.136,104.909,76.054,132.309l15.019,8.771l-15.866,7.118C253.813,337.068,230.279,342.104,206,342.104z"/>
</svg>`;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDark: boolean = false;

  @Output("swapEvent") swapEvent = new EventEmitter<boolean>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('moon', sanitizer.bypassSecurityTrustHtml(MOON));
    iconRegistry.addSvgIconLiteral('moon-filled', sanitizer.bypassSecurityTrustHtml(MOON_FILLED));
  }
  
  changeTheme(): void{
    if (this.isDark){
      this.isDark = false;
      (document.getElementById("moon") as HTMLButtonElement).setAttribute("hidden", "hidden");
      (document.getElementById("moon-filled") as HTMLButtonElement).removeAttribute("hidden");
    }
    else{
      this.isDark = true;
      (document.getElementById("moon-filled") as HTMLButtonElement).setAttribute("hidden", "hidden");
      (document.getElementById("moon") as HTMLButtonElement).removeAttribute("hidden");
    }
    
    this.swapEvent.emit(this.isDark);
  }
}
