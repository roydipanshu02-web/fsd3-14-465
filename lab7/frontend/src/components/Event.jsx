const MyButton = () => {
    const handleClick = () => {
        alert("Button Clicked");
    }

    return (
        <button style={{height:"40px" , width:"100px" , color:"blue" , backgroundColor:"yellow"}} onClick={handleClick}>click Me</button>
    )
};


const Event = () => {
  return (
    <div>
      <MyButton/>
    </div>
  )
}

export default Event
