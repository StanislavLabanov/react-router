import { FC } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/use-auth"
import { Button, Form, Input, Typography } from 'antd';
interface FieldType {
   username?: string;
}

export const Login: FC = () => {
   const navigate = useNavigate()
   const location = useLocation()
   const value = useAuth()

   const onSubmit = (e: FieldType) => {
      const username = e.username
      username && value?.singIn(username.toString(), () => navigate(location.state?.from || '/', { replace: true }))
   }

   return (
      <>
         <Typography.Title style={{ textAlign: 'center' }}>Введите свое имя</Typography.Title>
         <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: '80%', marginTop: '5%' }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            autoComplete="off"
         >
            <Form.Item<FieldType>
               label="Обязательное поле"
               name="username"
               rules={[{ required: true, message: 'Пожалуйста введите ваше имя!' }]}
            >
               <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
            </Form.Item>
         </Form>
      </>
   )
}