import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
        }}
      >
        <Link href={"/assignment-5/ques1"}>
          <button style={buttonStyle}>ques1</button>
        </Link>
        <Link href={"/assignment-5/ques2"}>
          <button style={buttonStyle}>ques2</button>
        </Link>
        <Link href={"/assignment-5/ques3"}>
          <button style={buttonStyle}>ques3</button>
        </Link>
        <Link href={"/assignment-5/ques4"}>
          <button style={buttonStyle}>ques4</button>
        </Link>
        <Link href={"/assignment-5/ques5"}>
          <button style={buttonStyle}>ques5</button>
        </Link>
        <Link href={"/assignment-5/ques6"}>
          <button style={buttonStyle}>ques6</button>
        </Link>
         <Link href={"/assignment-5/ques7"}>
          <button style={buttonStyle}>ques7</button>
        </Link>
         <Link href={"/assignment-5/ques8"}>
          <button style={buttonStyle}>ques8</button>
        </Link>
          <Link href={"/assignment-5/ques9"}>
          <button style={buttonStyle}>ques9</button>
        </Link>
          <Link href={"/assignment-5/ques10"}>
          <button style={buttonStyle}>ques10</button>
        </Link>
          <Link href={"/assignment-5/ques11"}>
          <button style={buttonStyle}>ques11</button>
        </Link>
          <Link href={"/assignment-5/ques12"}>
          <button style={buttonStyle}>ques12</button>
        </Link>
        <Link href={"/assignment-5/ques13"}>
          <button style={buttonStyle}>ques13</button>
        </Link>
        <Link href={"/assignment-5/ques14"}>
          <button style={buttonStyle}>ques14</button>
        </Link>
        <Link href={"/assignment-5/ques15"}>
          <button style={buttonStyle}>ques15</button>
        </Link>
        <Link href={"/assignment-5/ques16"}>
          <button style={buttonStyle}>ques16</button>
        </Link>
      </div>

      <hr style={{ margin: "20px 0" }} />

      {children}
    </div>
  );
}

const buttonStyle = {
  padding: "8px 16px",
  cursor: "pointer",
};
