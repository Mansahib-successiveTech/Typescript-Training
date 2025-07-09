import { UserCard } from "../../../components";

const ShowUserCard=()=>{
    return(
        <>
        <h3>2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the users name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data.</h3>
<br>
</br>
        <UserCard name={"sahib"} email={"sahib@gmail.com"} avatar={"/images/man.png"} />
        <UserCard name={"sidak"} email={"sid@gmail.com"} avatar={"/images/sid.png"} /> 
        </>
    )
}
export default ShowUserCard;