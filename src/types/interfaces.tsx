export interface Contact {
    name: string
    id: number,
    image: string,
    secondName: string,
    subtitle: string
    bio: string
}

export interface Avatar { 
    path: string
}

export interface ImageMap {
    [key: string] : string
}

export interface State {
    x: number,
    y: number,
    index: number
}