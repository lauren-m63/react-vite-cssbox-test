import { NeuGrid, NeuAssets, NeuApp } from "@neutron/react"
import "./App.css" // do i need to do this or does it do automatically bc of import link on other page


const Greeting = () => { 
    return <div>
      <h1>Welcome!</h1>
      </div>
}


// if i didnt want to export this in one line how would i declare greeting 
// so i could put 'export const Greeting' where the other export is at the bottom 

// only need to export functions used outside the module (another file (name.tsx)/ collection of files)

function lauren(){
    return (
      <NeuApp>
        <NeuGrid unit= "container" fluid= { true }>
          <NeuGrid unit= "row">
            <NeuGrid unit= "column" col= { 12 } colLg= { 3 }><NeuAssets asset="HcaHealthcareStacked" primary="blue" /></NeuGrid>
            <NeuGrid unit= "column" col= { 12 } colLg= { 6 }>YOUR_FOOTER_LINKS</NeuGrid>
            <NeuGrid unit= "column" col= { 12 } colLg= { 3 }>YOUR_SOCIAL_LINKS</NeuGrid>
          </NeuGrid>
        </NeuGrid>
      </NeuApp> //why do i need the NeuApp 
      // 
    )
}

//why does only the default export show up on screen 

//can i save this in my own github or is that not allowed
// even if i cant access neutron would i be able to collab on it since this is from HCA file 

export default lauren //allows other files to import this function 
export { Greeting };
// you can have multiple exports but only one default export 
// npm run dev