import { Injectable } from '@angular/core';

@Injectable()

/**
 * A blocker: Need to choose whether I have to store the
 * user object in the indexdb/cookies/localStorage.
 * After careful research, my decision is that I cannot
 * use localStorage or Indexdb for storage purposes...
 * Because mostly of the security concerns over indexdb/
 * localStorage. Therefore, I am gonna resort to using
 *
 */
export class UserService {
    constructor() {}
}
