import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
