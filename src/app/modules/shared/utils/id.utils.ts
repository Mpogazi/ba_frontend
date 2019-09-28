type UUID = string;

export class ID {
    constructor() {}

    public generate(): UUID {
        const arr = window.crypto.getRandomValues(new Uint16Array(5));
        let temp = '';
        const length = arr.length;
        for (let i = 0; i < length; i++) {
            temp += arr[i].toString(16).toUpperCase();
            if (i < (length - 1)) {
                temp += '-';
            }
        }
        return temp;
    }
}
