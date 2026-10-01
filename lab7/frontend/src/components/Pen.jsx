const Pen = (props) => {
    const { picUrl, company ,quantity , price } = props.pen;
    const qtyStyle={
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"yellow",
    padding:"10px",
  };
  return (
    <div className="pen">
      <img src={picUrl} alt={company} />
      <h3>{company}</h3>
      <h2 style={qtyStyle}>Quantity: {quantity}</h2>
      <h4>Rs. {price}</h4>
    </div>
  );
};

export default Pen;

