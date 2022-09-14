import { Component, Input, OnInit } from '@angular/core';
import { Observable, switchMap, throttleTime,mergeMap } from 'rxjs';

@Component({
  selector: 'training-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  observable: Observable<any>;
  items: string[] = [];
  title = "My app title";
  
  ngOnInit(): void {
    this.observable = new Observable((obs)=>{
      obs.next(1);
      obs.next(4);
      obs.complete();
    });
    
  }
  addTodoToList(todo: string):void{
    this.items.push(todo);
  }


  onClick(){
    this.observable
    .pipe(
      switchMap((num: number) => {
        return new Observable((observebale)=>{
          observebale.next(num+ 2);
          observebale.complete();
        });
      })
    ).subscribe((x)=>console.log(x));
  }
  
  
}
