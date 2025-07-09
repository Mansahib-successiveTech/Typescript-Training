
import  ClientAxios  from "./ClientAxios";
import { getDogs } from "../app/assignment-5/actions";



const SimpleAxios=async()=>{
const result=await getDogs();
console.log(result);

return(
    <>
    <p>using axios</p>
    {result?(
        result.map((items,index)=>
        <li key={index}>
        {items.attributes.body}
        </li>
        )
    ):"no data from server"}
    <ClientAxios result={result} />
    </>

    
)
}
export default SimpleAxios