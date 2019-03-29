import { Component } from '@angular/core';
import { Story } from './../story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  masterStoryList: Keg[] = [
    {
      
    }
  ]
}
