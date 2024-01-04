import { Project } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk(
    "GET: Get all project",
    async () => {
        try {
            const project: Project[] = [
                {
                    yearBuild: 2023,
                    name: "MovieAPI",
                    description: "The simple api about movie and built with C#, ASP .NET Core Web API",
                    tags: [
                        {
                            name: 'source',
                            link: 'https://github.com/Loiphan1003/MovieAPI.git'
                        }
                    ]
                },
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
                    name: "Website supports learning programming languages.",
                    description: "Self-taught website building project.",
                    tags: [
                        {
                            name: 'source',
                            link: 'https://github.com/Loiphan1003/DA_CODESAMPLE.git'
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
                },
                {
                    yearBuild: 2021,
                    name: "Hotel Management",
                    description: "The Desktop Application for manager hotel work, built with WPF, C#.",
                    tags: [
                        {
                            name: 'source',
                            link: 'https://github.com/Loiphan1003/QuanLyKhachSan_WPF_3Layer.git'
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