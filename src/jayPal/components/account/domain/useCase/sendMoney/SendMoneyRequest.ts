export default class SendMoneyRequest {
    constructor(
        private readonly accountId: string
    ) {
    }

    getAccountId(): string {
        return this.accountId;
    }
}
