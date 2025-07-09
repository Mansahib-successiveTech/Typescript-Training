
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      <p>
        this is homepage
        </p>
        <Link href={"/about"}>
        about</Link>
   </div>
   </>
  );
}
