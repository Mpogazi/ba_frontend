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

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit, OnDestroy {
    public signupForm: FormGroup;

    constructor(private fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private auth: AuthService) { }

    ngOnInit() {
        this.signupForm = this.fb.group({
            email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            firstName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            confirmPassword: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required)
        }, { validator: MustMatch('password', 'confirmPassword') });
    }

    ngOnDestroy() { }

    get f() {
        return this.signupForm.controls;
    }

    public emptyForm() {
        this.signupForm.setValue({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' });
    }

    public signup() {
        if (!this.signupForm.invalid && !this.signupForm.invalid) {
            this.auth.signup(this.signupForm.value).subscribe(
                (x: any) => console.log(x),
                (e: any) => console.log("An error fuck!")
            );
        }
    }
}
