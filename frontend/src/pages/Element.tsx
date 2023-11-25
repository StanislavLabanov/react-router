import axios from "axios";
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ElementType } from "../types/element";

const Element: FC = () => {
   const params = useParams()
   const [element, setElement] = useState<null | ElementType>(null)

   const fetchElement = async () => {
      const responce = await axios.get<ElementType>(`http://localhost:3010/api/categories?name=${params.name}&id=${params.id}`)
      setElement(responce.data)
   }

   useEffect(() => {
      fetchElement()
   }, [])

   return (
      <>
         <h1>{element?.name}</h1>
         <ul>
            {
               element
                  ?
                  Object.entries(element).map(el =>
                     <li key={el[0]}><b>{el[0]}:</b> {el[1]}</li>
                  )
                  : null
            }
         </ul>
      </>
   )
}

export default Element