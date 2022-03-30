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
        <button class="btn btn-primary" [class.active]="isActive">Save</button> 
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">StyleBinding</button> 
        <button (click)="onSave($event)">EventBinding</button> 
        <input (keyup)="onKeyUp($event)" />
        <input (keyup.enter)="onKeyUpEventFiltering()" />
        <input (keyup.enter)="templateVariables($event)" />
        <input #email (keyup.enter)="templateVariablesAngularWay(email.value)" />
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

    templateVariablesAngularWay(value: string) {
        console.log(value);
    }
}