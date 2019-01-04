import { AppService } from './../app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    stringSubjectvalue: string;
    @Input() myInputVal: string;
    @Output() myOutputVal = new EventEmitter();
    constructor(private AppService: AppService) { }

    ngOnInit() {
        this.AppService.stringSubject.subscribe(resp => {
            this.stringSubjectvalue = resp;
            this.myOutputVal.emit(this.myInputVal)
        })
    }
}

