import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public wrongCredentials = false;
    public submitted = false;

    public validatorMessages = {
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

    get f() {
        return this.loginForm.controls;
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            remember: new FormControl('')
        });
    }

    public login() {

        if (this.loginForm.invalid) {
            console.log('Form has issues');
            this.submitted = true;
            return;
        }


        console.log('Value to send', this.loginForm.value);
        this.loginForm.setValue({email: '', password: '', remember: ''});
    }
}
