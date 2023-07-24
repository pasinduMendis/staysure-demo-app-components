import Button from "./button"
import type { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Button>={
  title: "Components/Button",
  component: Button,
  argTypes: { 
  btnStyles:{control:"object"},
  labelStyles:{control:"object"},
  subLabelStyles:{control:"object"},
  label: { control: 'text' },
  subLabel: { control: 'text' },
  isActive: { control: 'boolean' },
  background:{control:'color'},
  activeBackground:{control:'color'},
},
  
}
export default meta

type Story = StoryObj<typeof meta>

export const Default:Story={
args :{
  label:"test"
}}

export const ButtonWithSubLabel :Story= {
  args :{
    label:"test",
    subLabel:"sub label"
  }
}



/* export const ButtonColourRed :Story= Template.bind({})
ButtonColourRed.args = {
  btnBackground:"red"
}

export const CellBackground = Template.bind({})
CellBackground.args = {
  cellBackground:"#1E90FF"
} */


