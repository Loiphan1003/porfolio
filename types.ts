export interface TagType {
    name: 'source'| 'demo',
    link: string
}

export interface Project {
    yearBuild: number,
    description: string,
    name: string,
    tags: TagType[]
}