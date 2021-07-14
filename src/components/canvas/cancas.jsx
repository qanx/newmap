
import React, { useState, useEffect, useRef } from "react"
import reactDom from "react-dom"
import readyimg from './newmap.jpg'
import pinimgsrc from './pin.png'
const CatMeme = () => {

  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [loc,setLoc]=useState({loc:[

    {X: 66.92634347203933, Y: 88.88852340989818},



{X: 42.89998854935705, Y: 61.94248838355747},


{X: 31.02595986169939, Y: 53.11533897837689},



{X: 35.75701816693799, Y: 41.616815411102195},



{X: 56.53656837033889, Y: 33.25425281672059}
  ]})

  useEffect(() => {
    const catImage = new Image();
    catImage.src = readyimg
    catImage.onload = () => setImage(catImage)


   
    return()=>{

    }
  }, [])

    
  const pinImg = new Image();
  pinImg.src = pinimgsrc
  function drawSavedOne(){
    const ctx = canvas.current.getContext("2d")
    // Get corrent mouse coords
    let rect = canvas.current.getBoundingClientRect();

    for (let n in loc.loc){

      ctx.drawImage(pinImg, loc.loc[n].X /100 * rect.width, loc.loc[n].Y /100 *rect.height, 20,20);
    }
  
  }

  function mouseClicked(mouse) {
    
        const ctx = canvas.current.getContext("2d")
        // Get corrent mouse coords
        let rect = canvas.current.getBoundingClientRect();

  
    // let mouseXPos = (mouse.x - rect.left);
    let mouseXPos = (mouse.x - rect.left);
    let mouseYPos = (mouse.y - rect.top);
    let xPer=(mouseXPos/rect.width)*100;
    let yPer=(mouseYPos/rect.height)*100;
    // add(mouseXPos,mouseYPos)


    console.log("Marker added" +   mouseYPos );
    console.log("Marker added" +   mouseXPos );
    console.log("Marker xPer" +   xPer );
    console.log("Marker yPer" +   yPer );
    
    // newArray.push(mouseXPos,mouseYPos)
    // console.log("Marker added array" +  newArray);

    setLoc((prevState => ({
      loc: [...prevState.loc,{X:xPer,Y:yPer}]})))
      console.log(loc)
    ctx.drawImage(pinImg, xPer /100 * rect.width, yPer  /100 *rect.height, 20,20);
   
    // Move the marker when placed to a better location

    // console.log(loc)

    
//     var marker = new Marker();
    // marker.XPos = mouseXPos - (marker.Width / 2);
    // marker.YPos = mouseYPos - marker.Height;

// console.log(listting)
//     Markers.push(marker);


}


  useEffect(() => {
    if(image && canvas) {
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 10., 10)
      ctx.drawImage(image, 0 ,0,window.innerWidth,window.innerHeight)

      ctx.font = "20px Comic Sans MS"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, (400 / 2), 25)
      ctx.fillText(bottomText, (400 / 2), 256 + 40 + 25)
      ctx.canvas.addEventListener('click', mouseClicked,false)

    }
  }, [image, canvas, topText, bottomText])

  return (
    <div>
      <h1>Cat Meme!</h1>

      <div>
        <canvas 
          ref={canvas}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </div>

      <div>
        <input type="text"
          value={topText}
          onChange={e => setTopText(e.target.value)}
        />
        <br />
        <button onClick={drawSavedOne}> click to show all </button>
        <input type="text"
          value={bottomText}
          onChange={e => setBottomText(e.target.value)}
          
        />
      </div>

    </div>
  )
}

export default CatMeme


