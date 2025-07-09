import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      {/* Flex container to lay buttons horizontally */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "10px" }}>
        <Link href={"/assignment-2/ques1"}>
          <button style={buttonStyle}>ques1</button>
        </Link>
        <Link href={"/assignment-2/ques2"}>
          <button style={buttonStyle}>ques2</button>
        </Link>
        <Link href={"/assignment-2/ques3"}>
          <button style={buttonStyle}>ques3</button>
        </Link>
        <Link href={"/assignment-2/ques4"}>
          <button style={buttonStyle}>ques4</button>
        </Link>
        <Link href={"/assignment-2/ques5"}>
          <button style={buttonStyle}>ques5</button>
        </Link>
        <Link href={"/assignment-2/ques6"}>
          <button style={buttonStyle}>ques6</button>
        </Link>
        <Link href={"/assignment-2/ques7"}>
          <button style={buttonStyle}>ques7</button>
        </Link>
        <Link href={"/assignment-2/ques8"}>
          <button style={buttonStyle}>ques8</button>
        </Link>
        <Link href={"/assignment-2/ques9"}>
          <button style={buttonStyle}>ques9</button>
        </Link>
        <Link href={"/assignment-2/ques10"}>
          <button style={buttonStyle}>ques10</button>
        </Link>
        <Link href={"/assignment-2/ques11"}>
          <button style={buttonStyle}>ques11</button>
        </Link>
        <Link href={"/assignment-2/ques12"}>
          <button style={buttonStyle}>ques12</button>
        </Link>
        <Link href={"/assignment-2/ques13"}>
          <button style={buttonStyle}>ques13</button>
        </Link>
        <Link href={"/assignment-2/ques14"}>
          <button style={buttonStyle}>ques14</button>
        </Link>
        <Link href={"/assignment-2/ques15"}>
          <button style={buttonStyle}>ques15</button>
        </Link>
        <Link href={"/assignment-2/ques16"}>
          <button style={buttonStyle}>ques16</button>
        </Link>
        <Link href={"/assignment-2/ques17"}>
          <button style={buttonStyle}>ques17</button>
        </Link>
        <Link href={"/assignment-2/ques18"}>
          <button style={buttonStyle}>ques18</button>
        </Link>
        <Link href={"/assignment-2/ques19"}>
          <button style={buttonStyle}>ques19</button>
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
