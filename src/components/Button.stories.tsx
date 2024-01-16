import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      options: ["primary", "normal"],
      control: { type: "select" },
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary2",
    primary: true,
  },
};

export const Normal: Story = {
  args: {
    label: "Normal",
    primary: false,
  },
};
