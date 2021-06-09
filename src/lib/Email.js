export class Email {
    isValid(email) {
        const regex = new RegExp("\\S+@\\S+\\.\\S+");
        return regex.test(email)
    }
}