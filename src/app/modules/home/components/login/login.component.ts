import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private loginForm: FormGroup;
    private validatorMessages = {
        email: [
            {type: 'required', message: 'Email required'},
            {type: 'validUsername', message: 'Invalid email address'}
        ],
        password: [
            {type: 'required', message: 'password required'},
            {type: 'pattern', message: 'Password must contain !@#$%^'},
            {type: 'minlength', message: 'Password must be at least 5 characters long'}
        ]

    };

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            remember: new FormControl('')
        });
    }

    public login() {
        console.log('Value to send', this.loginForm.value);
        this.loginForm.setValue({email: '', password: '', remember: ''});
    }
}
