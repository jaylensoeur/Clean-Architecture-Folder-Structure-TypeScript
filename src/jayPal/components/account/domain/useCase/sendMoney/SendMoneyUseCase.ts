import {SendMoneyUseCaseInterface} from "./boundary/input/SendMoneyUseCaseInterface";
import SendMoneyRequest from "./SendMoneyRequest";
import {SendMoneyPresenterInterface} from "./boundary/output/SendMoneyPresenterInterface";
import SendMoneyResponse from "./SendMoneyResponse";
import {AccountRepositoryInterface} from "../../repository/AccountRepositoryInterface";

export default class SendMoneyUseCase implements SendMoneyUseCaseInterface {
    constructor(
        private readonly accountRepository: AccountRepositoryInterface,
        private readonly sendMoneyPresenter: SendMoneyPresenterInterface
    ) {
    }

    async transfer(sendMoneyRequest: SendMoneyRequest): Promise<void> {
       try {
            const account = await this.accountRepository.getAccountById(sendMoneyRequest.getAccountId());
            this.sendMoneyPresenter.present(new SendMoneyResponse())
       } catch (error) {
            // handle the error
       }
    }
}
