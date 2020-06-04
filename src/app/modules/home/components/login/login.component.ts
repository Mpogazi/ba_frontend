import {
	Component,
	OnInit,
	ChangeDetectorRef,
	ChangeDetectionStrategy,
	OnDestroy,
	ViewChild,
} from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
	NgForm,
} from "@angular/forms";
import { AuthService } from "@auth/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil, first } from "rxjs/operators";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
	public loginForm: FormGroup;
	public loading = false;
	public submitted = false;
	public returnUrl: string;
	public error = "";
	private destroy$: Subject<boolean> = new Subject<boolean>();

	constructor(
		private fb: FormBuilder,
		private cd: ChangeDetectorRef,
		private route: ActivatedRoute,
		private auth: AuthService,
		private router: Router
	) {
		if (this.auth.isLoggedIn) {
			this.router.navigate(["dashboard"]);
		}
	}

	get f() {
		return this.loginForm.controls;
	}

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: new FormControl(
				"",
				Validators.compose([Validators.required, Validators.email])
			),
			password: new FormControl(
				"",
				Validators.compose([
					Validators.required,
					Validators.minLength(6),
				])
			),
			remember: new FormControl(""),
		});

		this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}

	public login() {
		this.submitted = true;
		// Stop if invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
		this.auth
			.login(this.loginForm.value)
			.pipe(first())
			.subscribe(
				(data) => {
					this.router.navigate(["dashboard"]);
				},
				(error) => {
					this.error = error;
					this.loading = false;
				}
			);
	}
}
