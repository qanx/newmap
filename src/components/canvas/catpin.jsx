
import CatMeme from "./cancas"
import React, { useState, useEffect, useRef } from "react"
import pinimg from './newmap.jpg'


const Pin = () => {

  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  useEffect(() => {
    const pinimg = new Image();
    pinimg.src = pinimg
    pinimg.onload = () => setImage(pinimg)

    return()=>{

    }
  }, [])

  useEffect(() => {
    if(image && canvas) {
        CatMeme.Image.addEventListener('click',()=>{})
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 10., 10)
      ctx.drawImage(image, 0 ,0,window.innerWidth,window.innerHeight)

      ctx.font = "20px Comic Sans MS"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, (400 / 2), 25)
      ctx.fillText(bottomText, (400 / 2), 256 + 40 + 25)

    }
  }, [image, canvas, topText, bottomText])

  return (
    <div>
  

      <div>
        <canvas 
          ref={canvas}
          width={10}
          height={10}
        />
      </div>

      <div>
        <input type="text"
          value={topText}
          onChange={e => setTopText(e.target.value)}
        />
        <br />
        <input type="text"
          value={bottomText}
          onChange={e => setBottomText(e.target.value)}
        />
      </div>

    </div>
  )
}

export default CatMeme