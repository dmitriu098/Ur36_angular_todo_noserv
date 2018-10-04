import { Component, OnInit } from '@angular/core';
import {Todos} from './todos';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taskTitle = 'Мои задачи';
  newTask: string = '';



  todoes: Todos[] = [
    {id: 1, task: 'Buy milk', status: false},
    {id:2, task: 'Buy chleb', status: false},
    {id:3, task: 'Buy cukier',status: false}
  ];


  //1. Добавление новой задачи

  addTask(){

        if(this.newTask !== ''){
          this.todoes.push({id: this.todoes.length+1, task: this.newTask, status:false});
          this.newTask = '';
        }
        else{
          alert('Введите задачу!');
        }

  }

  //2. Статус задачи (Выполненна/невыполненна)
  togleStatus(todo, index){

   todo.status = !todo.status;
   //alert(this.todoes[index].status);

  }


  //3. Удаление задачи
  removeTodo(index){
    this.todoes.splice(index, 1);
  }


  constructor() { }

  ngOnInit() {

  }

}
