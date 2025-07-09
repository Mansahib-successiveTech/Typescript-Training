import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "10px"  }}>
        <Link href="/assignment-1/ques1">
          <button style={buttonStyle}>ques1</button>
        </Link>
        <Link href="/assignment-1/ques2">
          <button style={buttonStyle}>ques2</button>
        </Link>
        <Link href="/assignment-1/ques3">
          <button style={buttonStyle}>ques3</button>
        </Link>
        <Link href="/assignment-1/ques4">
          <button style={buttonStyle}>ques4</button>
        </Link>
        <Link href="/assignment-1/ques5">
          <button style={buttonStyle}>ques5</button>
        </Link>
        <Link href="/assignment-1/ques6">
          <button style={buttonStyle}>ques6</button>
        </Link>
      </div>

    
      <div style={{ padding: "10px" }}>
        {children}
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "8px 16px",
  cursor: "pointer",
};
