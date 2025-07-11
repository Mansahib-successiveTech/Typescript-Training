import { Weather } from "../../../components"

const GetWeather=()=>{
return(
    <>
    <h3>
    3.Create a functional component named Weather that accepts a prop called temperature (a number).
Display a message like Its sunny today! if the temperature is above 25°C and Its cold today! if the temperature is below 10°C.
Import and render the Weather component in the App component with different temperature values.
    </h3>
    <br></br>
    <Weather temperature={40} />
    <Weather temperature={7} />
    </>
)
}
export default GetWeather