import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../utils/validators.util';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public signupForm: FormGroup;
    public submitted = false;
    public wrongCredentials = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.signupForm = this.fb.group({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)])),
            confirmPassword: new FormControl('', Validators.required),
            termsConditions: new FormControl('', Validators.required)

        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    get f() {
        return this.signupForm.controls;
    }

    public disable(e) {
        const button = document.getElementById('submitButton');
        if (!!e.target.checked === true) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    }

    public emptyForms() {
        this.signupForm.setValue({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsConditions: ''
        });
    }

    public signup() {
        if (this.signupForm.invalid) {
            console.log(this.signupForm.value);
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
                this.emptyForms();
            }, 3000);
            return;
        }

        this.emptyForms();
    }

}
