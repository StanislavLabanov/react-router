import axios from "axios"
import { useEffect, useState } from "react"
import { DataType, Result, queryTypes } from "./type"

export const useSearchData = (query: queryTypes) => {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)
   const [list, setList] = useState<Result[]>([])
   const [hasMore, setHasMore] = useState(false)
   const [pageNumber, setPageNumber] = useState(1)

   useEffect(() => {
      setList([])
      setPageNumber(1)
   }, [query])

   const fetchHendler = async () => {
      try {
         const responce = await axios.get<DataType>(`https://rickandmortyapi.com/api/${query}`, { params: { page: pageNumber } })
         const data = await responce.data
         setList(prev => [...prev, ...data.results])
         setHasMore(pageNumber < data.info.pages)
         setLoading(false)
      } catch (e) {
         console.error(e)
         setError(true)
         setLoading(false)
      }
   }

   useEffect(() => {
      setLoading(true)
      setError(false)
      fetchHendler()
   }, [query, pageNumber])

   return { loading, error, list, hasMore, setPageNumber }
}