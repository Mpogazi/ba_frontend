import { UserModel } from '../../models/user.model';
import { CookieService } from '../cookies/cookie.service';

import { Injectable } from '@angular/core';

@Injectable()

/**
 * A blocker: Need to choose whether I have to store the
 * user object in the indexdb/cookies/localStorage.
 */
export class UserService {
    constructor() {}
}
