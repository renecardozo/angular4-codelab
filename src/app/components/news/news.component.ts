import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'news-component',
    templateUrl: 'news.component.html',
    styleUrls: ['news.component.css']
})
export class NewsComponent implements OnInit {
    message: string = 'it is a news component';
    contructor() {}
    ngOnInit() {}
}