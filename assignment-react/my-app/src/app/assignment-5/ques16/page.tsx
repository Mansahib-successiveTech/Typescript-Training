import { HocFetch } from "../../../components";

const Home = () => {
  return (
    <>
      <p>
        16. Create a higher-order component (HOC) named withDataFetching where
        the data fetching happens in a Server Component using SSR. The fetched
        data should then be passed as props to a Client Component wrapped by the
        HOC, which displays the data.
      </p>
    <HocFetch />
    </>
  );
};
export default Home;
