import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'sharder-component',
    templateUrl: 'sharders.component.html',
    styleUrls: ['sharders.component.css']
})
export class ShardersComponent implements OnInit {
    message: string = 'It is Sharder component';
    constructor() {}
    ngOnInit(){}
}