import { Button } from "../../../components"

const ShowButton=()=>{
    return(
        <>
        <h3>
        6.Create a functional component named Button that accepts props for text and color.
Style the button using inline styles or CSS classes based on the color prop.
Import and render the Button component in the App component with different text and color props.
        </h3>
        <br></br>
        <Button text={"hi sahib"} colorBtn={"red"}  />
        </>
    )
}
export default ShowButton