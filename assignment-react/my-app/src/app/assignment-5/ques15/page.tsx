import { Logfiles } from "../../../components";

const Home = () => {
  return (
    <>
      <p>
        15. Build a higher-order component (HOC) named withLogger that logs
        component lifecycle events like mounting, unmounting, and updating.
        Apply this HOC to a component and ensure the logs appear in the browser
        console.
      </p>
      <Logfiles/>
    </>
  );
};
export default Home;
