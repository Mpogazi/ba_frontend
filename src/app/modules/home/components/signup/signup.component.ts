import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../utils/validators.util';
import { pubSubService } from '@shared_services/pub-sub.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
    public signupForm1: FormGroup;
    public signupForm2: FormGroup;
    public ndphase = false;
    public errors1 = false;
    public errors2 = false;


    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.signupForm1 = this.fb.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)])),
            confirmPassword: new FormControl('', Validators.required),
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
        this.signupForm2 = this.fb.group({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
        });
    }

    ngOnDestroy() {

    }

    get f1() {
        return this.signupForm1.controls;
    }

    get f2() {
        return this.signupForm2.controls;
    }

    public disable(e) {
        const button = document.getElementById('submitButton');
        if (!!e.target.checked === true) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    }

    public emptyForm1() {
        this.signupForm1.setValue({
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    public emptyForm2() {
        this.signupForm2.setValue({
            firstName: '',
            lastName: ''
        });
    }

    private submitData(): boolean {
        return false;
    }

    public signup1() {
        if (this.signupForm1.invalid) {
            this.errors1 = true;
            return;
        }
        this.ndphase = true;
    }

    public signup2() {
        if (!this.signupForm1.invalid && !this.signupForm2.invalid) {
            console.log(this.signupForm1.value);
            console.log(this.signupForm2.value);
            // submit the form
        }
        this.errors2 = true;
    }
}
