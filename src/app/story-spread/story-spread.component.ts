import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-spread',
  templateUrl: './story-spread.component.html',
  styleUrls: ['./story-spread.component.css'],
  providers: [StoryService]
})
export class StorySpreadComponent implements OnInit {
  constructor(private router: Router, private storyService: StoryService) { }

  ngOnInit() {
  }

}
