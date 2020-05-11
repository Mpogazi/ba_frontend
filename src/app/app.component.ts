import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = 'app';
    public myStyle: object = {};
    public myParams: object = {};
    public width = 100;
    public height = 100;

    ngOnInit() {
        this.myStyle = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            'z-index': -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 60,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'circle',
                },
                opacity: {
                    value: 0.3,
                    random: false
                },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: '#ffffff',
                    opacity: 0.135,
                    width: 0.45
                }
            }
        };
    }

}
