import { useState } from "react"
import { Item } from "../../Componant"
import one from '../../Resources/img/1.jpg'
import two from '../../Resources/img/2.jpg'
import three from '../../Resources/img/3.jpg'
const Continar = () => {
   return (
 <>
      <div className="flex project pt-30" >
      <Item src={one}/>
      <Item src={two}/>
      <Item src={three}/>
      </div>
           {/* <div className="flex project pt-30" >
           {Array(3).fill(0).map(e => <Item src={one}/>)}
           </div> */}
 </>
        
   )
}

export default Continar
