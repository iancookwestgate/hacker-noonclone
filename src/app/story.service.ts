import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StoryService {
  stories: FirebaseListObservable<any[]>;
  constructor() { }

}
