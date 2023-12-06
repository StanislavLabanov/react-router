import { FC, useCallback, useRef, } from "react"
import { useParams } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary";
import { useSearchData } from "../hooks/useSearchData";
import { queryTypes } from "../hooks/type";

export const Category: FC = () => {
   const params = useParams()
   const observer = useRef<IntersectionObserver | null>(null)
   const { loading, error, list, hasMore, setPageNumber } = useSearchData(params.name as queryTypes)

   const lastNodeRef = useCallback((node: HTMLLIElement) => {
      if (loading) return
      if (observer.current) {
         (observer.current as IntersectionObserver).disconnect()
      }

      (observer.current as IntersectionObserver) = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting && hasMore) {
            setPageNumber(prev => prev + 1)
         }
      })

      if (node) {
         (observer.current as IntersectionObserver).observe(node)
      }
   }, [loading, hasMore])

   return (
      <>
         <h1>{params.name?.toUpperCase()}</h1>
         <ErrorBoundary>
            <>
               <ul>
                  {
                     list.map((el, index) => {
                        if (list.length === index + 1) {
                           return <li ref={lastNodeRef} key={el.id}>{el.name}</li>
                        } else return <li key={el.id}>{el.name}</li>
                     })
                  }
               </ul>
               {loading && <div>Loading...</div>}
               {error && <div>Error...</div>}
            </>
         </ErrorBoundary>
      </>
   )
}