export interface Contact {
    name: string
    id: string
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