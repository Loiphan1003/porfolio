import { Project } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk(
    "GET: Get all project",
    async () => {
        try {
            const project: Project[] = [
                {
                    yearBuild: 2023,
                    name: "ChatApp",
                    description: "A simple Chatapp RealTime, you can chat with your friends.",
                    gitHubLink: 'https://github.com/Loiphan1003/chatwithme',
                    demoLink: 'none',
                },
                {
                    yearBuild: 2023,
                    name: "Wheater forecast",
                    description: "You can watch Wheater forecast in Việt Nam.",
                    gitHubLink: 'https://github.com/Loiphan1003/WeatherForecast',
                    demoLink: 'none'
                }
            ]
            return project;
        } catch (error) {
            const project: Project[] = []
            return project;
        }
    }
)