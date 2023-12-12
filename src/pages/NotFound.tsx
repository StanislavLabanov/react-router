import { FC } from "react"
import { Result } from 'antd';

export const NotFound: FC = () => {
   return (
      <Result
         status="404"
         title="404"
         subTitle="Извините, похоже такой страницы не существует"
      />
   )
}