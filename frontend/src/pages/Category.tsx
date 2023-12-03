import axios from "axios";
import { ChangeEvent, FC, useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ElementType } from "../types/element";

const Category: FC = () => {
   const location = useLocation()
   const navigate = useNavigate();
   const params = useParams()
   const [list, setList] = useState<ElementType[] | []>([]);

   const fetchList = async () => {
      const responce = await axios.get<ElementType[]>(`http://localhost:3010/api/categories?name=${params.name}`)
      setList(responce.data)
   }

   useEffect(() => {
      location.search && navigate(`/${params.name}`)
      fetchList()
   }, [params.name])

   const sortList = (e: ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === 'ask') {
         list.sort((a, b) => +new Date(a.created) - +new Date(b.created))
      } else {
         list.sort((a, b) => +new Date(b.created) - +new Date(a.created))
      }

      navigate(`/${params.name}?sort=${e.target.value}`)
   }

   return (
      <>
         <h1>{params.name?.toUpperCase()}</h1>
         <select onChange={(e) => sortList(e)}>
            <option value={'ask'}>сначала новые</option>
            <option value={'desk'}>сначала старые</option>
         </select>
         <ul>
            {
               list.map(el =>
                  <li key={el.id}><Link to={`/${params.name}/${el.id}`}>{el.name}</Link></li>
               )
            }
         </ul>
      </>
   )
}

export default Category