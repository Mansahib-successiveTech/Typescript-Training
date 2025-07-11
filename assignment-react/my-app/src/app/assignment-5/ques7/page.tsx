import { SimplePost } from "../../../components";

const Home = () => {
  return (
    <>
      <p>
        7. Create a Component in Next.js that renders a form allowing the user
        to input data, such as a post title and content. On form submission, use
        Axios to send a POST request to a public API endpoint, submitting the
        users input data. Handle success and error states appropriately in the
        UI.
      </p>
      <SimplePost />
    </>
  );
};
export default Home;
