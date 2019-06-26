/**
 * request.js
 */
import { format } from "./common";
import { baseURL } from "../api/config";

class Request {
  constructor(config = {}) {
    this.baseURL = config.baseURL || ''
  }
  get(url, data) {
    return this._fetch(`${url}${format(data)}`, {
      method: 'GET',
      headers: {
        'cookie': 'SESSION=OGZiMDU3Y2QtZjAxNC00NmNhLWI1ZWYtZjNiYmFiM2MwMmI4;'
      }
    })
  }
  post(url, data) {
    return this._fetch(url, {
      body: JSON.stringify(data),
      method: 'POST'
    })  
  }
  upload(url, file, data = {}) {
    var formData = new FormData();
    const _file = { uri: file.uri, type: 'multipart/form-data', name: file.fileName };
    formData.append('file', _file);
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    return this._fetch(url, {
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  }
  _fetch(url, params) {
    const _this = this
    params = Object.assign({}, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }, params)
    console.log(`${_this.baseURL}${url}`, params)
    return new Promise((resolve, reject) => {
      fetch(`${_this.baseURL}${url}`, params)
      .then( response => resolve(response.json()))
      .catch( error => reject(error))
    })
  }
}

export default new Request()