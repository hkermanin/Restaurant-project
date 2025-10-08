
function PrevArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        background:'red',
        borderRadius: "50%", 
        paddingTop:'2px',
         zIndex: 10,
        left: "10px" 
      }}
      onClick={onClick} 
    />

  );
}


function NextArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        background:'red',
        borderRadius: "50%", 
        paddingTop:'2px',
         zIndex: 10,
        right: "10px" 
      }}
      onClick={onClick} 
    />

  );
}





export { PrevArrow,NextArrow};