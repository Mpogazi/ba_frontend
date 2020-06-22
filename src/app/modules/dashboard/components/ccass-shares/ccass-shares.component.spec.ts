import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CcassSharesComponent } from "./ccass-shares.component";

describe("CcassSharesComponent", () => {
	let component: CcassSharesComponent;
	let fixture: ComponentFixture<CcassSharesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CcassSharesComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CcassSharesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
