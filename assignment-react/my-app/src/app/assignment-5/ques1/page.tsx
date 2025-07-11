import { SimpleFetch } from "../../../components";

const Home = () => {
  return (
    <>
      <p>
        1. Create a Next.js component using the App Router that fetches data on
        the server side (SSR) from a public API (e.g., JSONPlaceholder) and
        displays the results on the page.
      </p>
      <SimpleFetch />
    </>
  );
};
export default Home;
