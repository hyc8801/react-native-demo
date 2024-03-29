export function format(json) {
  let str = ''
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      str += `&${key}=${json[key]}`
    }
  }
  return `${str ? '?' : ''}${str.substring(1)}`
}

// 时间格式化

export function formatTime(obj, format) {
  if (format) {
    let date
    if (obj instanceof Date) {
      date = obj
    } else {
      obj = obj.toString().length === 10 ? parseInt(obj) * 1000 : obj
      date = new Date(obj)
    }
    const dayNames = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

    const o = {
      'M+': date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1), // 月份
      'd+': date.getDate() < 10 ? '0' + date.getDate() : date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S+': date.getMilliseconds(), // 毫秒
      'D+': dayNames[date.getDay()] // 星期
    }

    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
    for (const k in o) {
      if (new RegExp(`(${k})`).test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
      }
    }
    return format
  } else {
    obj = obj.toString().length === 10 ? parseInt(obj) * 1000 : obj
    const date = new Date(obj)
    var _year = date.getFullYear(),
      _month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1),
      _date = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
      _hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
      _minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
      _second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
    return _year + '-' + _month + '-' + _date + ' ' + _hour + ':' + _minute + ':' + _second
  }
}