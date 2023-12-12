import { FC, useCallback, useRef, } from "react"
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "../component/error-boundary";
import { queryTypes, useSearchData } from "../hooks/use-search-data";
import { Typography, Menu, List } from 'antd';

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
         <Typography.Title style={{ textAlign: 'center' }}>{params.name?.toUpperCase()}</Typography.Title>
         <ErrorBoundary>
            <>
               <List
                  header={undefined}
                  footer={undefined}
                  dataSource={list}
                  renderItem={(el, index) =>
                     <List.Item ref={list.length === index + 1 ? lastNodeRef : undefined} key={el.id}>{el.name}</List.Item>
                  }
               />
               {loading && <Typography.Text type="success">Загрузка...</Typography.Text>}
               {error && <Typography.Text type="danger">Ошибка...</Typography.Text>}
            </>
         </ErrorBoundary>
      </>
   )
}