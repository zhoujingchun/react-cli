import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FileOutlined,
    HomeOutlined,
    RadarChartOutlined,
    AliwangwangOutlined,
} from '@ant-design/icons'
import { Switch, Route, Redirect } from 'react-router-dom'
import MenuLeft from 'Components/menu-left'
import Dash from '@/main/containers'

import './css/index.scss'

import config from '@/conf'

const { Header, Sider, Content } = Layout

const {
    url: {
        app: { file, dash, ts, study, hooks, frontScenario, virtualScroll, chatRoom },
    },
} = config
const App = (match: Record<string, any>) => {
    const [collapsed, setCollapsed] = useState(false)
    const { url, history } = match

    const menuData = [
        {
            title: '首页',
            id: 1,
            url: dash.path,
            icon: <HomeOutlined />,
        },
    ]

    return (
        <Layout className='app'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='logo' />
                <MenuLeft menuData={menuData} />
            </Sider>
            <Layout className='site-layout'>
                <Header className='site-layout-background-head' style={{ padding: 0 }}>
                    <span className='trigger' onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </span>
                </Header>
                <Content
                    className='site-layout-background'
                    style={{
                        padding: 24,
                        margin: 24,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path={dash.path} component={Dash} />

                        <Route path={url} exact render={() => <Redirect to={dash.path} />} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default React.memo(App)
