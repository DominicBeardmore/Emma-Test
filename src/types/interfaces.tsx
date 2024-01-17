export interface Contact {
    name: string
    id: number
    image: string
    secondName: string
    subtitle: string
    bio: string
}

export interface Avatar { 
    avatar: string
    index: number
}

export interface ImageMap {
    [key: string] : string
}

export interface State {
    x: number
    y: number
    index: number
}