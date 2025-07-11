import { SimpleAxios } from "../../../components";

const Home = () => {
  return (
    <>
      <p>
        6. Modify your previous Next.js Server Component that fetches data with
        Axios to include error handling. If the request fails, display an error
        message and provide a retry button so the user can attempt fetching the
        data again. Implement the retry logic in a Client Component to handle
        user interaction.
      </p>
      <SimpleAxios />
    </>
  );
};
export default Home;
