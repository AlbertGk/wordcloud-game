const Button = ({ label, callback }) => {
  return <button onClick={callback}>{label}</button>;
};

export default Button;
