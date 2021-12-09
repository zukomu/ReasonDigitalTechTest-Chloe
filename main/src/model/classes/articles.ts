import { articleType } from "../enums/articleTypes";

export class article{
    constructor(title: string, type: articleType, images: string[], description: string, methods: string[], id: number){
        this.title = title
        this.type = type
        this.images = images
        this.description = description
        this.methods = methods
        this.id = id
    }
    id: number 
    title: string
    type: articleType
    images: string[]
    description: string
    methods: string[]
}