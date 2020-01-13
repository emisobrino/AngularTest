import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl:'./primercomponent.html',
    styles: ['./primercomponent.css']
})
export class HelloWorld{
    title = "Welcome to angular";
}