import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-story-spread',
  templateUrl: './story-spread.component.html',
  styleUrls: ['./story-spread.component.css'],
  providers: [StoryService]
})
export class StorySpreadComponent implements OnInit {
  stories: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
