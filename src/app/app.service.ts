import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

    public stringSubject = new Subject<string>();

    passValue(data) {
        //passing the data as the next observable
        this.stringSubject.next(data);
    }

}

