import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../utils/validators.util';
import { AuthService } from '@auth/auth.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit, OnDestroy {
    public signupForm: FormGroup;
    public loading = false;
    public submitted = false;
    public returnUrl: string;
    public error = '';
    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private fb: FormBuilder,
        private route: ActivatedRoute,
        private auth: AuthService,
        private router: Router) {

        if (this.auth.isLoggedIn) {
            this.router.navigate(['dashboard']);
        }
    }

    ngOnInit() {
        this.signupForm = this.fb.group({
            email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            firstName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            confirmPassword: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required)
        }, { validator: MustMatch('password', 'confirmPassword') });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    get f() {
        return this.signupForm.controls;
    }

    public emptyForm() {
        this.signupForm.setValue({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' });
    }

    public signup() {
        this.submitted = true;
        // stop if form invalid
        if (this.signupForm.invalid) {
            return;
        }

        this.loading = true;
        this.auth.signup(this.signupForm.value)
            .pipe(first())
            .subscribe(
                data => { this.router.navigate(['dashboard']); },
                error => { this.error = error; this.loading = false; }
            );
    }
}
