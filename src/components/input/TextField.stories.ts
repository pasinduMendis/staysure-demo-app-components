import TextField from './input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text' },
    textFieldStyles: { control: "object" },
    labelStyles: { control: "object" },
    descriptionStyles: { control: "object" },
    errorMessageStyles: { control: "object" },
  },
};
export default meta

type Story = StoryObj<typeof meta>

export const Default:Story={
args :{
}}

export const WithLabel :Story= {
  args :{
    label:"test",
  }
}

export const WithDescription :Story= {
  args :{
    description:"test description",
  }
}

export const withError :Story= {
  args :{
    errorMessage:"test errorMessage",
  }
}

export const withPlaceholder:Story= {
  args :{
    placeholder:"test placeholder",
  }
}


