import SendMoneyResponse from "../../SendMoneyResponse";

export interface SendMoneyPresenterInterface {
    present(sendMoneyResponse: SendMoneyResponse): void;
}
