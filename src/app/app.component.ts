import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIfSample';

  user = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": true
  }

  isCompletedStyle():any {
    if (this.user && this.user.completed == true){
      return {color :'#FF0000'}
    }
    return{}
  }
}
