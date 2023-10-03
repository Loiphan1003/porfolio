import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../components/Tag";


const meta: Meta<typeof Tag> = {
    title: "Tag",
    component: Tag,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: {
        label: "demo",
    },
};
