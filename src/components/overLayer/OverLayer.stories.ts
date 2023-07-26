import OverLayer from './overLayer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OverLayer> = {
  title: "Components/OverLayer",
  component: OverLayer,
  argTypes: {
    bottomLayerStyles: { control: "object" },
    isOpen: { control: "boolean" },
  },
};
export default meta

type Story = StoryObj<typeof meta>

export const Default:Story={
args :{
    isOpen:false,
}}

export const OpenOverLayerModal :Story= {
  args :{
    isOpen:true,
    children:"test over Layer"
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


