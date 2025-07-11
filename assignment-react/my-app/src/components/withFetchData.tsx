// components/withFetch.jsx

const withFetch = async (WrappedComponent, url, Props = {}) => {
  const res = await fetch(url);
  const data = await res.json();

  return <WrappedComponent data={data} {...Props} />;
};

export default withFetch;
