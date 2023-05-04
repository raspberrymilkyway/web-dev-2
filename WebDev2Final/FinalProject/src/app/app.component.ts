import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';
  isDark = false;
  
  swapDark(tf: boolean){
    this.isDark = tf;
    
    if (this.isDark){
      (document.getElementById("bg") as HTMLDivElement).classList.remove("light");
      (document.getElementById("bg") as HTMLDivElement).classList.add("dark");
    }
    else{
      (document.getElementById("bg") as HTMLDivElement).classList.add("light");
      (document.getElementById("bg") as HTMLDivElement).classList.remove("dark");
    }
  }
}
