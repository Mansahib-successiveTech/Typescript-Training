import { SearchFilter } from "../../../components";

const Home = () => {
  return (
    <>
      <p>
        7.Design a search filter component that consists of an input field. As
        the user types into the input, use controlled components to filter a
        list of items displayed below. The list should dynamically update to
        show only items matching the search query.
      </p>
      <SearchFilter />
    </>
  );
};
export default Home;
