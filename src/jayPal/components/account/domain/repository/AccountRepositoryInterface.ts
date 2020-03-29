import Account from '../entity/Account';

export interface AccountRepositoryInterface {
    getAccountById(accountId: string): Promise<Account>;
}
