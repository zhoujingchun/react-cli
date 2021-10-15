/**
 * 功能：
 * 作者：zhoujingchun
 * 日期：
 */

import React from 'react'
import { Modal } from 'antd'
import classNames from 'classnames'

const noop = function () {}

interface DialogProps {
    dialogType: 'normal' | 'alert' | 'confirm' | 'delete'
    title: string
    content?: JSX.Element | null
    width: number
    footer: any[]
    show: boolean
    ok: () => void
    cancel: () => void
}

const Dialog: React.FC<DialogProps> = (props) => {
    const {
        dialogType = 'confirm',
        title,
        content = null,
        width = 500,
        footer = [],
        show = false,
        ok = noop,
        cancel = noop,
    } = props
    const footerNew = footer
    const contentSec = content
    const infoTypeCls = 'dialog-info'

    return (
        <Modal
            className={classNames({ 'dialog-common': true, [infoTypeCls]: dialogType === 'alert' })}
            title={title}
            footer={footerNew}
            visible={show}
            wrapClassName='dialogwapper'
            maskClosable={false}
            width={width}
            onOk={ok}
            onCancel={cancel}
            destroyOnClose
        >
            {contentSec}
        </Modal>
    )
}

export default React.memo(Dialog)
