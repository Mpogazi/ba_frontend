import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
    public loginForm: FormGroup;
    public wrongCredentials = false;

    public validatorMessages = {
        email: [
            { type: 'required', message: 'Email required' },
            { type: 'validUsername', message: 'Invalid email address' }
        ],
        password: [
            { type: 'required', message: 'password required' },
            { type: 'pattern', message: 'Password must contain !@#$%^' },
            { type: 'minlength', message: 'Password must be at least 5 characters long' }
        ]
    };

    constructor(private fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private auth: AuthService) {
    }

    get f() {
        return this.loginForm.controls;
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            remember: new FormControl('')
        });
    }

    ngOnDestroy() {

    }

    public login() {
        if (!this.loginForm.invalid) {
            console.log('Called this login()\n');
            this.auth.login(this.loginForm.value).subscribe(
                (x: any) => console.log(x),
                (e: any) => console.log(e)
            );
        }
    }
}
