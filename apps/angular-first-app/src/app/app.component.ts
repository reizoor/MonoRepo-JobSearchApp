import { Component, Input } from '@angular/core';

@Component({
  selector: 'training-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: string[] = [];
  
  addTodoToList(todo: string){
    this.items.push(todo);
  }
  
}
