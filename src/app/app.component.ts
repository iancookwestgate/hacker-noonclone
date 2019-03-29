import { Component } from '@angular/core';
import { Story } from './../story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  masterStoryList: Story[] = [
    {
      img: './assets/img/tensorflow.png',
      title: "TensorFlow is dead, long live TensorFlow!",
      description: "If you're an AI enthusiast and you didn't see the big news this month, you might have just snoozed through an off-the-charts earthquake...",
      profile: './assets/img/eric-insta.jpeg',
      name: "Eric Wang",
      dateRead: "Mar 28 - 16 min read"
    }
  ]
}
