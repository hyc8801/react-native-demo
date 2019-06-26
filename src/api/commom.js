import request from "../utils/request";
import * as qiniu from 'qiniu-js'
import { formatTime } from "../utils/common";

export const getQiniuToken = () => {
  return request.get('/admin/upload/token')
}

export const uoloadFile = (file, classify="app", isHttps = false) => {
  const _file = { uri: file.uri, type: 'multipart/form-data', name: file.fileName, mimetype: file.type };
  
  const type = file.type.split('/')[1]
  const Time = formatTime(Date.now(), 'yyyyMMdd')
  const key = Time + (Math.random() * (99999 - 10000 + 1) + 10000).toFixed()
  return new Promise((resolve, reject) => {
    getQiniuToken().then(res => {
      console.log(res)
      qiniu.upload(_file, `${classify}/${key}.${type}`, res.token, 
        {
          fname: '',
          params: {},
        },
        { useCdnDomain: true,
          region: qiniu.region.z2
        })
        .subscribe({
          error(err) {
            reject(err.message)
          },
          complete(res) {
            resolve(`${isHttps ? 'https' : 'http'}://mallfile.yayawx.cn/${res.key}`)
          }
        })
    })
  })
}
