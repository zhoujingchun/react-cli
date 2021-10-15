export {}
declare const window: Window
declare global {
    interface Window {
        projectConf: Record<string, any>
    }
}
