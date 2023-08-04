import RangeCalendar,{BtnProps} from "./calendar"
import type { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof RangeCalendar>={
  title: "Components/Calendar",
  component: RangeCalendar,
  argTypes: { btnBackground:{control:'color'} ,
  weekColor:{control:'color'},
  cellBackground:{control:'color'},
  cellBackgroundSelected:{control:'color'},
  headreStyle:{control:"object"},
  weekStyles:{control:"object"},
  cellStyles:{control:"object"},
  btnStyles:{control:"object"},
},
  
}
export default meta

type Story = StoryObj<typeof meta>

export const Default:Story={
args :{
}}

export const ButtonColourRed :Story= {
  args :{
    btnBackground:"red"
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


