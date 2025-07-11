"use client"

import { ReusableButton } from "../../../components";


const Home = () => {
   const text = "reusable component ";
    const backGroundStyle = "aqua";
    const heading="Dumb modal"
    const onClickhandler = () => {
      alert("hi");
    };
  return (
    <>
      <p>
        12. Create a reusable Button component that accepts props to apply
        different styles such as primary, secondary, and danger, along with
        click handlers. Demonstrate how to use this Button component within a
        sample Next.js application.
      </p>
      <ReusableButton
            text={text}
            backGroundStyle={backGroundStyle}
            onClickhandler={onClickhandler}
          />

    </>
  );
};
export default Home;
