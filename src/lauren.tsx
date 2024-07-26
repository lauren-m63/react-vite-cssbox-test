import { NeuGrid, NeuAssets } from "@neutron/react"
import lauren from './App';

function Grid(){
    return (
        <NeuGrid unit= "container" fluid= { true }>
<NeuGrid unit= "row">
  <NeuGrid unit= "column" col= { 12 } colLg= { 3 }><NeuAssets asset="HcaHealthcareStacked" primary="blue" /></NeuGrid>
  <NeuGrid unit= "column" col= { 12 } colLg= { 6 }>YOUR_FOOTER_LINKS</NeuGrid>
  <NeuGrid unit= "column" col= { 12 } colLg= { 3 }>YOUR_SOCIAL_LINKS</NeuGrid>
</NeuGrid>
</NeuGrid>
    )
}

lauren; 
// what would this do - output the grid ? also do i need the semi colon 
// whats with the syntax ; 

export default Grid
