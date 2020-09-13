export class Enrollee {

    id: string;
    name: string;
    active: boolean;
    dateOfBirth: string;

    public constructor(init?: Enrollee) {
        Object.assign(this, init);
    }
}
