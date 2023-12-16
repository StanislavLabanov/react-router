import { FC, useTransition } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/use-auth"
import { Button, Typography, Flex } from 'antd';

export const Auth: FC = () => {
   const value = useAuth()
   const navigate = useNavigate()
   const [isPending, startTransition] = useTransition()

   if (!value?.user) {
      return isPending
         ? <Typography.Text type="secondary">Загрузка...</Typography.Text>
         : <Button type="primary" style={{ margin: '10px 0 10px 10px' }} onClick={() => startTransition(() => navigate('/login'))}>Зарегистрироваться</Button>
   }
   return (
      <Flex wrap="wrap" gap="small" style={{ margin: '10px 0 10px 10px' }}>
         <Typography.Text type="secondary">Здравствуйте! {value.user}</Typography.Text>
         <Button type="primary" onClick={() => value.singOut(() => navigate('/'))}>Выйти</Button>
      </Flex>
   )
}