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
        <Link href={"/assignment-3/ques1"}>
          <button style={buttonStyle}>ques1</button>
        </Link>
        <Link href={"/assignment-3/ques2"}>
          <button style={buttonStyle}>ques2</button>
        </Link>
        <Link href={"/assignment-3/ques3"}>
          <button style={buttonStyle}>ques3</button>
        </Link>
        <Link href={"/assignment-3/ques4"}>
          <button style={buttonStyle}>ques4</button>
        </Link>
        <Link href={"/assignment-3/ques5"}>
          <button style={buttonStyle}>ques5</button>
        </Link>
        <Link href={"/assignment-3/ques6"}>
          <button style={buttonStyle}>ques6</button>
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
