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
      profile: './assets/img/cassie-insta.jpeg',
      name: "Cassie Kozyrkov",
      dateRead: "Mar 28 - 8 min read"
    },
    {
      img: './assets/img/blockchain.png',
      title: "Combining Blockchain and File Storage Might Just Decentralize the Internet",
      description: "See how using blockchain as a tool will propel cloud storage to greater heights for a decentralized future.",
      profile: './assets/img/eric-insta.jpeg',
      name: "Eric Wang",
      dateRead: "Mar 28 - 16 min read"
    },
    {
      img: './assets/img/game-of-thrones.png',
      title: "Announcing Guess the Throne | A Game of Thrones Death Pool",
      description: "Spoilers ahead! Please don't visit the website or read this post if you're not caught up.",
      profile: './assets/img/marcus-insta.jpeg',
      name: "Marcus Wood",
      dateRead: "Mar 29 - 3 min read"
    },
    {
      img: './assets/img/seed-fundraising.jpeg',
      title: "Seed Fundraising | The 4 Stages of a VC Process",
      description: "The venture capital ('VC') meeting process can be opaque and leave you wondering when you'll get a decision on if they'll invest in your...",
      profile: './assets/img/ash-insta.jpeg',
      name: "Ash Rust",
      dateRead: "Mar 29 - 4 min read"
    },
    {
      img: './assets/img/kaggle-grandmaster.jpg',
      title: "Interview with Kaggle Grandmaster, Data Scientist at Point API: Pavel Pleskov",
      description: "Part 25 of the series where I interview my heroes.",
      profile: './assets/img/sanyam-insta.png',
      name: "Sanyam Bhutani",
      dateRead: "Mar 29 - 13 min read"
    },
    {
      img: './assets/img/leaving-medium.png',
      title: "Why is Hackernoon.com leaving Medium",
      description: "David Smooke, CEO and Founder of Hackernoon here. Been a hectic week, a lot of misinformation floating around, but I took the time to sit...",
      profile: './assets/img/david-insta.jpeg',
      name: "David Smooke",
      dateRead: "Mar 15 - 1 min read"
    },
    {
      img: './assets/img/contribute-story.png',
      title: "How to Contribute a Story to Hacker Noon",
      description: "We've revamped our story submission process. Stories@HackerNoon.com will remain an available open line for contributors, but in order to...",
      profile: './assets/img/david-insta.jpeg',
      name: "David Smooke",
      dateRead: "Jan 29 - 3 min read"
    },
    {
      img: './assets/img/hand-out.jpg',
      title: "Where Hackers Hang Out",
      description: "Hackernoon Community Enters Public Beta",
      profile: './assets/img/david-insta.jpeg',
      name: "David Smooke",
      dateRead: "Mar 25 - 3 min read"
    },
  ]
}
