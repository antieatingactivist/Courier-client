export interface ITag {
    sender: IClient,
    recipient: IClient,
    level: string
}

export interface IStop {
    associatedClient: IClient,
    clientInfo: IClient,
    level: string
}

export interface IClient {
    name: string,
    address: string,
    city: string,
    state: string,
    zip: number,
    arrivalWindowStart: Date,
    arrivalWindowEnd: Date,
    isRecipient: boolean,
    status: string

}