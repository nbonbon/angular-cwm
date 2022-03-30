import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul> 
        <button class="btn btn-primary" [class.active]="isActive">Save</button> <br>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">StyleBinding</button> <br>
        <button (click)="onSave($event)">EventBinding</button> <br>
        <input (keyup)="onKeyUp($event)" /><br>
        <input (keyup.enter)="onKeyUpEventFiltering()" /><br>
        <input (keyup.enter)="templateVariables($event)" /><br>
        <input #email (keyup.enter)="templateVariablesAngularWay(email.value)" /><br>
        <input type="text" [(ngModel)]="name" (keyup.enter)="twoWayBinding()" /><br>
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = true;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event: Event) {
        console.log("Button was clicked.", $event);
    }

    onKeyUp($event: KeyboardEvent) {
        if($event.code === "Enter")  console.log("ENTER was pressed");
    }

    onKeyUpEventFiltering() {
        console.log("ENTER was pressed");
    }

    templateVariables($event: Event) {
        const target = $event.target as HTMLTextAreaElement;
        console.log(target.value);
    }

    email: string = "example@gmail.com";
    templateVariablesAngularWay(value: string) {
        console.log(value);
    }
    
    name: string = "John Doe";
    twoWayBinding() {
        console.log(this.name);
    }

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
}