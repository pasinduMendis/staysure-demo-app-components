import TextField from "./input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    errorMessage: { control: "text" },
    placeholder: { control: "text" },
    textFieldStyles: { control: "object" },
    labelStyles: { control: "object" },
    descriptionStyles: { control: "object" },
    errorMessageStyles: { control: "object" },
    inputStyles: { control: "object" },
    focusInputStyles: { control: "object" },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputStyles: {
      border: "1px solid #dbdddd",
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      height: "63px",
      borderRadius: "8px",
      padding: "18px",
    },
    textFieldStyles: {
      height: "63px",
    },
  },
};

export const WithLabel: Story = {
  args: {
    label: "test",
    inputStyles: {
      border: "1px solid #dbdddd",
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      height: "63px",
      borderRadius: "8px",
      padding: "18px",
    },
    textFieldStyles: {
      height: "63px",
    },
    labelStyles: {
      position: "relative",
      top: "-16px",
      fontSize: "26px",
      color: "#522367",
      lineHeight: "normal",
      fontWeight: "500",
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
    },
  },
};

export const WithDescription: Story = {
  args: {
    description: "test description",
    inputStyles: {
      border: "1px solid #dbdddd",
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      height: "63px",
      borderRadius: "8px",
      padding: "18px",
    },
    textFieldStyles: {
      height: "63px",
    },
  },
};

export const withError: Story = {
  args: {
    textFieldStyles: {
      height: "63px",
    },
    errorMessage: "test errorMessage",
    inputStyles: {
      border: "1px solid #c00",
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      height: "63px",
      borderRadius: "8px",
      padding: "18px",
    },
    errorMessageStyles: {
      fontSize: "12.8px",
      fontFamily: '"Open Sans",Helvetica,Arial,sans-serif',
      color: "#c00",
    },
  },
};

export const withPlaceholder: Story = {
  args: {
    placeholder: "test placeholder",
    inputStyles: {
      border: "1px solid #dbdddd",
      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
      height: "63px",
      borderRadius: "8px",
      padding: "18px",
      ':placeholder': {
        color: 'red'
      }
    },
    textFieldStyles: {
      height: "63px",
    },
  },
};
