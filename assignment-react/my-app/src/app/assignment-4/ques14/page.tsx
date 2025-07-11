import FormWithSummary from "../../../components/FormWithValidations";

const Home = () => {
  return (
    <>
      <p>
        14.Create a new form and Implement form submission handling. Ensure that
        the form cannot be submitted if there are validation errors. Display a
        summary of errors if the user attempts to submit an invalid form.
      </p>
      <FormWithSummary />
    </>
  );
};
export default Home;
