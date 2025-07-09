
import withFetch from './withFetchData';

interface Item{
  id:number;
  title:string;
}
function MainComponent({ data, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {data?.map((item:Item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function HocFetch() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const Wrapped = await withFetch(MainComponent, url, {
    title: 'Fetched Posts',
  });

  return <div style={{ padding: 40 }}>{Wrapped}</div>;
}
