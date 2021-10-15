import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
    method: 'get',
    baseURL: '',
    timeout: 0,
    responseType: 'json',
    paramsSerializer: (params) => qs.stringify(params, { indices: false }),
})

instance.interceptors.request.use(
    (config) => ({
        ...config,
        /* cancelToken: new axios.CancelToken((cancel) => {
      window.projectConf.cancelToken[config.headers.eventName] = cancel;
    }), */
    }),
    (err) => Promise.reject(err),
)

const handleWithParameter = function (
    url: any,
    {
        method = 'GET',
        headers = {},
        contentType = 'application/json; charset=UTF-8',
        params = {},
        data = {},
        hasLoading = true,
        eventName,
        extra,
        extraConfig = {},
    }: any,
): Promise<any> {
    const locHref = window.location.href
    const firstShapeIndex = locHref.indexOf('#')
    const lastShapeIndex = locHref.lastIndexOf('#')
    const Location = `${locHref.slice(0, firstShapeIndex)}${locHref.slice(lastShapeIndex)}`

    instance.defaults.headers = {
        ...instance.defaults.headers,
        ...headers,
        Location,
        eventName,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': contentType,
    }

    // url替换参数
    const urlNew = url
    const strParams = []
    const paramsNew = { ...params }

    // 动态method覆盖
    let ajaxMethod = method.toLowerCase()
    if (extra.method) {
        ajaxMethod = extra.method.toLowerCase()
    }

    switch (ajaxMethod) {
        case 'get':
            return instance.get(urlNew, { params: paramsNew })
        case 'delete':
            return instance.delete(urlNew, { params: paramsNew, data })
        case 'post':
            return instance.post(urlNew, data, {
                params: strParams.length > 0 ? paramsNew : {},
                ...(extraConfig === undefined ? {} : extraConfig),
            })
        case 'put':
            return instance.put(urlNew, data, { params: strParams.length > 0 ? paramsNew : {} })
        default: {
            const res = {
                then: (resolve: any) =>
                    resolve({
                        statusCode: 300,
                        message: 'method params error!',
                    }),
            }
            return Promise.resolve(res)
        }
    }
}

export { handleWithParameter }
