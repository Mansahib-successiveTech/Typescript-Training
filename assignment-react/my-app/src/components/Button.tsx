const Button = ({ text, colorBtn }: { text: string; colorBtn: string }) => {
  return (
    <div>
      <button
        style={{
          color: colorBtn,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
