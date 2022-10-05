export interface ITag {
    sender: IClient,
    recipient: IClient,
    level: string,
    status: string,
    id: number,
    assignedTo: number | null
}

export interface IStop {
    associatedClient: IClient,
    clientInfo: IClient,
    level: string,
    id: number,
    status: string,
}

export interface IClient {
    name: string,
    address: string,
    city: string,
    state: string,
    zip: number,
    arrivalWindowStart: Date,
    arrivalWindowEnd: Date,
    isRecipient: boolean

}

export interface IOptions {
    hideComplete: boolean
}