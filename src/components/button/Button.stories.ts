import Button from "./button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    btnStyles: { control: "object" },
    labelStyles: { control: "object" },
    subLabelStyles: { control: "object" },
    label: { control: "text" },
    subLabel: { control: "text" },
    isActive: { control: "boolean" },
    background: { control: "color" },
    activeBackground: { control: "color" },
    border: { control: "text" },
    activeBorder: { control: "text" },
    hoverStyles: { control: "object" },
    activeStyles: { control: "object" },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "test",
  },
};

export const ButtonWithSubLabel: Story = {
  args: {
    label: "test",
    subLabel: "sub label",
  },
};

export const QuestionButton: Story = {
  args: {
    label: "Single Trip",
    labelStyles: { margin: "0", marginBottom: "10px" },
    subLabel: "sub label",
    subLabelStyles: {
      margin: "0",
      fontWeight: 400,
      fontSize: "15px",
      marginBottom: "0px",
      color: "#4d5154",
    },
    btnStyles: {
      color: "#1173d5",
      fontSize: "20px",
      fontWeight: 600,
      padding: "18px",
      maxWidth:"500px",
      width: "100%",
      border: "2px solid #dbdddd",
      outLine: "none",
      borderRadius: "8px",
      lineHeight: "20px",
    },
    border: "2px solid #dbdddd",
    hoverStyles: {
      border: "2px solid #1173d5",
    },
    //background:"#1173d5",
    activeBackground:"red",
    activeBorder:"red",
  },
};

/* export const ButtonColourRed :Story= Template.bind({})
ButtonColourRed.args = {
  btnBackground:"red"
}

export const CellBackground = Template.bind({})
CellBackground.args = {
  cellBackground:"#1E90FF"
} */
