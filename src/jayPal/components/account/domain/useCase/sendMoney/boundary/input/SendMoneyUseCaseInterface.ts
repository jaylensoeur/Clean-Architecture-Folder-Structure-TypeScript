import SendMoneyRequest from "../../SendMoneyRequest";

export interface SendMoneyUseCaseInterface {
    transfer(sendMoneyRequest: SendMoneyRequest): Promise<void>;
}
