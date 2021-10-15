import store from 'Src/redux/store'
import actionCreator from './actions/actionCreator'

interface dialogInterface {
    open: any
    hide: () => void
}
interface openInterface {
    title?: string | undefined
    content?: any
    footer?: null | undefined
    width?: number | undefined
    ok?: (() => void) | undefined
    cancel?: (() => void) | undefined
}
// Error:(21, 3) TS2322: Type '({ title, content, footer, width, ok, cancel, }: openInterface) => dialogInterface' is not assignable to type '() => void'.
// { title = '确认', content, footer = null, width = dialogWidth, ok = dialog.hide, cancel = dialog.hide }
const dialogWidth = 500

const dialog: dialogInterface = {
    open({
        title = '确认',
        content,
        footer,
        width = dialogWidth,
        ok = dialog.hide,
        cancel = dialog.hide,
    }: openInterface): any {
        const onOK = () => {
            if (typeof ok === 'function' && ok()) {
                dialog.hide()
            }
        }
        store.dispatch(
            actionCreator.showDialog({
                title,
                content,
                width,
                footer,
                cancel,
                ok: onOK,
                dialogType: 'normal',
            }),
        )

        return this
    },

    hide() {
        store.dispatch(actionCreator.hideDialog())

        return this
    },
}

export default dialog
