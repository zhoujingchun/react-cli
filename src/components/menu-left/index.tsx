/**
 * 功能：
 * 作者：zhoujingchun
 * 日期：
 */

import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import { Menu } from 'antd'

const { SubMenu } = Menu

type menuItem = {
    title: string
    id: number | string
    url: string
    icon?: JSX.Element
    children?: Array<menuItem>
}

interface MenuProps extends RouteComponentProps {
    menuData: Array<menuItem>
}

const getMenuList = (menuList: Array<menuItem>): JSX.Element[] => {
    return menuList.map((item) => {
        if (!item.children) {
            return (
                <Menu.Item key={item.url} icon={item.icon}>
                    <Link to={item.url}>{item.title}</Link>
                </Menu.Item>
            )
        }
        return (
            <SubMenu key={item.url} icon={item.icon} title={<span>{item.title}</span>}>
                {getMenuList(item.children)}
            </SubMenu>
        )
    })
}

const MenuLeft: React.FC<MenuProps> = function (props) {
    const {
        menuData,
        location: { pathname },
    } = props
    const openKey = pathname.slice(0, pathname.lastIndexOf('/'))

    return (
        <div className='menu-left-warp'>
            <Menu theme='dark' mode='inline' defaultOpenKeys={[openKey]} defaultSelectedKeys={[pathname]}>
                {getMenuList(menuData)}
            </Menu>
        </div>
    )
}

export default React.memo(withRouter(MenuLeft))
