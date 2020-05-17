import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../utils/validators.util';
import { HttpService } from '@shared_services/http.service';
import { HttpRequestModel, HttpVerbs } from '@shared_services/http.model';
import { User } from '@shared_models/user.model';
import { environment as env } from '@environment/environment';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit, OnDestroy {
    public signupForm1: FormGroup;
    public signupForm2: FormGroup;
    public ndphase = false;
    public errors1 = false;
    public errors2 = false;
    private request: HttpRequestModel;
    private user: User;


    constructor(private fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private http: HttpService) { }

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

    refresh() {
        this.cd.detectChanges();
    }

    ngOnDestroy() {

    }

    get f1() {
        return this.signupForm1.controls;
    }

    get f2() {
        return this.signupForm2.controls;
    }

    public disable(e: { target: { checked: any; }; }) {
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
            this.refresh();
            return;
        }
        this.ndphase = true;
    }

    public signup2() {
        if (!this.signupForm1.invalid && !this.signupForm2.invalid) {
            this.createUser(this.f1, this.f2);
            this.request.path = env.apiUrl + '/signup';
            this.request.method = HttpVerbs.POST;
            this.request.body = this.user;
            this.http.request(this.request);
        }
        this.errors2 = true;
    }

    private createUser(form1: any, form2: any) {
        this.user.email = form1.email.value;
        this.user.password = form1.password.value;
        this.user.firstName = form2.firstName.value;
        this.user.lastName = form2.lastName.value;
    }
}
