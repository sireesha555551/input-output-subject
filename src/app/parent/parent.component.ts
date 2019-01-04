import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    myTextVal;
    valuefromChild: string;
    constructor(private AppService: AppService) { }

    ngOnInit() {
    }
    sendTextValue() {
        this.AppService.passValue(this.myTextVal);
    }
    readOutputValueEmitted(val) {
        this.valuefromChild = val;
    }

}
