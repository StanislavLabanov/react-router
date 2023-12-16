import { FC, Suspense, useLayoutEffect, useState } from "react"
import { Link, Outlet, useParams } from 'react-router-dom'
import { Auth } from "../../../component/auth"
import { Layout, Menu, Typography } from 'antd';
import { list } from "../const/list";

export const NavMenu: FC = () => {
   const [keyItem, setKeyItem] = useState('')
   const params = useParams()

   useLayoutEffect(() => {
      params?.name ? setKeyItem(params.name) : setKeyItem('')
   }, [])

   return (
      <>
         <Auth />
         <Layout.Header>
            <Menu
               theme="dark"
               mode="horizontal"
               selectedKeys={[keyItem]}
               style={{ flex: 1, minWidth: 0 }}
               onClick={(e) => setKeyItem(e.key)}
            >
               {
                  list.map(el =>
                     <Menu.Item key={el.key}>
                        <Link to={`/${el.key}`}>{el.name}</Link>
                     </Menu.Item>
                  )
               }
            </Menu>
            <Suspense fallback={<Typography.Text type="success">Загрузка...</Typography.Text>}>
               <Outlet />
            </Suspense>
         </Layout.Header>
      </>
   )
}