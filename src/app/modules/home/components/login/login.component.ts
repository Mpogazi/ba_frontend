import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
    public loginForm: FormGroup;
    public wrongCredentials = false;
    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private auth: AuthService,
        private router: Router) {
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
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    private reroute(x: any) {
        this.router.navigateByUrl('/dashboard');
    }

    public emptyForm() {
        this.loginForm.setValue({ email: '', password: '' });
    }

    private handleError(e: any) {
        this.emptyForm();
    }

    public login() {
        if (!this.loginForm.invalid) {
            this.auth.login(this.loginForm.value)
                .pipe(takeUntil(this.destroy$))
                .subscribe(
                    this.reroute, this.handleError
                );
        }
    }
}

    // public validatorMessages = {
    //     email: [
    //         { type: 'required', message: 'Email required' },
    //         { type: 'validUsername', message: 'Invalid email address' }
    //     ],
    //     password: [
    //         { type: 'required', message: 'password required' },
    //         { type: 'pattern', message: 'Password must contain !@#$%^' },
    //         { type: 'minlength', message: 'Password must be at least 5 characters long' }
    //     ]
    // };