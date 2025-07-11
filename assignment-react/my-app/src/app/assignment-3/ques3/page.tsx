import Link from "next/link";


export default function Home() {
  return (
    <div>
      <p>
        3.create pages: Home and About. Implement file routing. Create navigation
        links to switch between the Home and About pages. Display appropriate
        content on each page. Add a 404 Not Found page for any invalid routes.
      </p>
      <Link href={'/about'}>about
      </Link> <br></br>
      <Link href={'/'}>back to home
      </Link> 
    </div>
  );
}
