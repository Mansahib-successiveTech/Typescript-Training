const Weather = ({ temperature }: { temperature: number }) => {
  return (
    <div>
      {temperature > 25 ? (
        <h3>Its a sunny day</h3>
      ) : temperature < 10 ? (
        <h3>Its a cold day</h3>
      ) : (
        <h3>Its moderate day</h3>
      )}
    </div>
  );
};

export default Weather;
