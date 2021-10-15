import { createAction } from 'redux-actions'
import { message as mesAntd } from 'antd'
import qs from 'qs'
import { handleWithParameter } from './ajax'

const createActions = function (actionMap: any): Promise<any> {
    const eventNames = Object.keys(actionMap)
    const fnsMap: any = {}
    for (const eventName of eventNames) {
        const configOrFn = actionMap[eventName]

        if (typeof configOrFn !== 'function') {
            const config = {
                method: 'GET',
                actionType: 'hasNotConfigActionType',
                hasLoading: true,
                handleError: true,
                ...configOrFn,
            }

            fnsMap[eventName] =
                (oSettings: any = {}) =>
                () => {
                    const settings = {
                        ...oSettings,
                        extra: {
                            preventDefault: false,
                            requestURL: config.url,
                            ...(oSettings.extra === undefined ? {} : oSettings.extra),
                        },
                    }

                    let logStatusCode = 200

                    return handleWithParameter(config.url, {
                        ...settings,
                        ...config,
                    })
                        .then((res) => {
                            const { statusCode, message } = res.data

                            logStatusCode = statusCode
                            const params = res.config.params === undefined ? res.config.data : res.config.params
                            const dt = qs.parse(params)
                            let data: any = {}

                            if (config.needFormData) {
                                data = { data: res }
                            } else {
                                data = res.data.data === undefined ? { ...res.data, data: dt } : res.data
                            }

                            switch (statusCode) {
                                case 200: {
                                    return res.data
                                }
                                case 302: {
                                    window.location.replace(res.data.data)
                                    break
                                }
                                case 403: {
                                    window.location.replace(`${window.location.origin}/permission-denied`)
                                    break
                                }
                                case 500: {
                                    window.location.replace(`${window.location.origin}/server-error`)
                                    break
                                }
                                default: {
                                    if (config.handleError) {
                                        mesAntd.error(message)
                                    }

                                    return res.data
                                }
                            }

                            return res.data
                        })
                        .catch(({ message, response }) => {
                            if (response) {
                                mesAntd.error(`${response.statusText}😂！`)
                                logStatusCode = response.status
                                return {
                                    statusCode: response.status,
                                    message: response.statusText,
                                }
                            }

                            if (message && config.handleError) {
                                mesAntd.error(`${message}！`)
                            } else {
                                console.log(`unknown error ${message}😂！`)
                            }

                            logStatusCode = 500
                            return {
                                statusCode: logStatusCode,
                                message,
                            }
                        })
                }
        } else {
            fnsMap[eventName] = configOrFn
        }
    }
    return fnsMap
}

export { createActions, createAction }
