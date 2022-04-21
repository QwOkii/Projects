import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-Header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
    USDtoUAH = 1;
    EURtoUAH = 1.5;
    ngOnInit(): void {
        
    }
};