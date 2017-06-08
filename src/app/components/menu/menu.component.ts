import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'menu-component',
    templateUrl: 'menu.component.html',
    styleUrls:['menu.component.css']
})
export class MenuComponent implements OnInit {
    constructor(){
        console.log('Constructor was called!');
    }
    ngOnInit(){
        console.log('ngOnInit was called');
    }
}