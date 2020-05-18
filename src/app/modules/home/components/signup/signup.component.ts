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
    public signupForm: FormGroup;
    private request = {} as HttpRequestModel;
    private user: string;


    constructor(private fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private http: HttpService) { }

    ngOnInit() {
        this.signupForm = this.fb.group({
            email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            firstName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            confirmPassword: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required)
        }, { validator: MustMatch('password', 'confirmPassword') });
    }

    refresh() { this.cd.detectChanges(); }
    ngOnDestroy() { }

    get f() {
        return this.signupForm.controls;
    }

    public emptyForm() {
        this.signupForm.setValue({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' });
    }

    public signup() {
        if (!this.signupForm.invalid && !this.signupForm.invalid) {
            this.createUser(this.signupForm);
            this.request.path = env.apiUrl + '/signup';
            this.request.method = HttpVerbs.POST;
            this.request.options = [];
            this.request.body = this.user;
            this.http.request(this.request).subscribe(
                x => console.log(x),
                e => console.log(e));
        }
    }

    private createUser(form: FormGroup) {
        this.user = JSON.stringify(form.value);
        console.log("deserialized");
        console.log(this.user);
    }
}
