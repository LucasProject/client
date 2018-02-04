import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showAlert: boolean = false;

    buttonClick() {
        this.showAlert = !this.showAlert;
        // add some comment
    }
}
