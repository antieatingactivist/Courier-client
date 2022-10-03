export interface ITag {
    sender: IClient,
    recipient: IClient,
    level: string,
    id: number
}

export interface IStop {
    associatedClient: IClient,
    clientInfo: IClient,
    level: string,
    id: number
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