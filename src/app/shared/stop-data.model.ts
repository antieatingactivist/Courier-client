export interface IStop {
    sender: IClient,
    recipient: IClient,
    level: string
}

interface IClient {
    name: string,
    address: string,
    city: string,
    state: string,
    zip: number,
    arrivalWindowStart: Date,
    arrivalWindowEnd: Date

}