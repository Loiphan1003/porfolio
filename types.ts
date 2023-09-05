export interface Project {
    yearBuild: number,
    description: string,
    name: string,
    gitHubLink: string | undefined,
    demoLink: string | 'none'
}