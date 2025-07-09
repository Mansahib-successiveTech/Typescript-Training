import { ControlledUnhide } from "../../../components";

const Home = () => {
  return (
    <>
      <p>
        3.Create a component with controlled input field and a button. When the
        user enters a specific value into the input (e.g., show), a new
        component should be rendered below the input, displaying a message.
        Otherwise, nothing should be displayed.
      </p>
      <ControlledUnhide/>
    </>
  );
};
export default Home;
