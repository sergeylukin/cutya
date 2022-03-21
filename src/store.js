import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 2.0,
      header: "Ghost Town",
      image: "/ghost-town.jpeg",
      aspect: 1.5,
      text: "Keep your tails ON"
    }
  ],
  stripes: [
    { offset: 0, color: "#24332e", height: 13 },
    { offset: 6.3, color: "#24332e", height: 20 }
  ],
  diamonds: [
    { x: 1.5, offset: 0, pos: new Vector3(), scale: 6, factor: 5.2 },
    { x: 2, offset: 2.1, pos: new Vector3(), scale: 1.8, factor: 2.1 }
  ],
  top: createRef()
}

export default state
