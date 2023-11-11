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
                    tags: [
                        {
                            name: 'source',
                            link: 'https://github.com/Loiphan1003/chatwithme'
                        }
                    ]
                },
                {
                    yearBuild: 2023,
                    name: "Wheater forecast",
                    description: "You can watch Wheater forecast in Việt Nam.",
                    tags: [
                        {
                            name: 'source',
                            link: 'https://github.com/Loiphan1003/WeatherForecast'
                        }
                    ]
                }
                ,
                {
                    yearBuild: 2023,
                    name: "Assassin's creed valhalla",
                    description: "This is a landing page design from figma.",
                    tags: [
                        {
                            name: 'source',
                            link: 'https://github.com/Loiphan1003/assassin-landing-page.git'
                        },
                        {
                            name: 'demo',
                            link: 'https://joyful-halva-dbff04.netlify.app/'
                        }
                    ]
                },
                {
                    yearBuild: 2023,
                    name: "Pomodoro",
                    description: "Applies Pomodoro to help you increase your study and work productivity.",
                    tags: [
                        {
                            name: 'demo',
                            link: 'https://pomodoro-bay-nu.vercel.app/'
                        }
                    ]
                }
            ]
            return project;
        } catch (error) {
            const project: Project[] = []
            return project;
        }
    }
)