export class Customer {
    id: number;
    firstName: string;
    lastName: string;

    constructor(data:any) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }
}
