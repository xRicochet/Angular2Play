export interface IEvent {
    id: number,
    name: String,
    date: Date,
    time: String,
    price: number,
    imageUrl: String,
    location?: {
        address: String,
        city: String,
        country: String
    },
    onlineUrl?: String,
    sessions: ISession[]
}

export interface ISession {
    id: number,
    name: String
    presenter: String
    duration: number
    level: String,
    abstract:String,
    voters: String[]
}