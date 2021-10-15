/**
 * 功能：
 * 作者：zhoujingchun
 * 日期：
 */

import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { Button, Input } from 'antd'
import dialog from 'Components/dialog'
import './index.scss'

const dialogOpen = () => {
    dialog.open({
        title: '测试',
        content: <div>6666</div>,
    })
}

function Main(props: any) {
    const [personName, setName] = useState('小明')
    const useName = useRef('张三')
    const { getUserInfo } = props
    const getUserInfoData = () => {
        getUserInfo().then((res: any) => {
            console.log(res)
        })
    }
    useEffect(() => {
        setTimeout(() => {
            // setName('小a');
            useName.current = '李四'
        }, 1000)
    }, [])

    return (
        <div className='main-warp'>
            <Button type='primary' onClick={dialogOpen}>
                测试button
            </Button>
            <Button style={{ marginLeft: '24px' }} type='primary' onClick={getUserInfoData}>
                测试接口3
            </Button>

            <Button style={{ marginLeft: '24px' }} type='primary' onClick={() => setName('小红')}>
                更改名称
            </Button>

            <h3>{personName}</h3>
        </div>
    )
}

export default Main
