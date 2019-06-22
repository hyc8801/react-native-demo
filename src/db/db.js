/**
 * Realm的使用
 */
import realm from "./index";

class DataTable {
  constructor(table, key) {
    this.table = table;
    this.id = null
    this.key = key || 'id'
  }
  /**
   * 插入一条数据
   * @param {Object} obj 
   */
  _insert(obj) {
    let init = {}
    init[this.key] =( this.id ? ++this.id : ++Object.keys(realm.objects(this.table)).length) + ''
    this.id = init[this.key]
    let params = Object.assign(init, obj)
    try {
      realm.write(() => {
        return (realm.create(this.table, params))
      })
    } catch (error) {
      console.error('插入失败',error)
    }
    
  }
  /**
   * 创建新的数据
   * @param {Array/Object} data 
   */
  create(data) {
    try {
      if ( data instanceof Array) {
        let len = data.length
        for (let i = 0; i < len; i++) {
          this._insert(data[i])
        }
      } else {
        this._insert(data)
      }
      return data
    } catch (error) {
      console.error('插入失败',error)
    }
    
  }
  /**
   * 查询数据
   * @param {Object} params 
   */
  query(params) {
    try {
      let list = []
      let data = {}
      if (params) {
        let filter = ''
        for (const key in params) {
          if (params.hasOwnProperty(key)) {
            filter += `AND ${key} = '${params[key]}'`
          }
        }
        data = realm.objects(this.table).filtered(filter.substring(4)).sorted(this.key)
      } else {
        data = realm.objects(this.table).sorted(this.key)
      }
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          list.push(data[key])
        }
      }
      return {list, data}
    } catch (error) {
      console.error('查询失败', error)
    }
  }
  /**
   * 删除数据
   * @param {Object} params 
   */
  delete(params) {
    let objects =  this.query(params).data
    try {
      realm.write(() => {
        realm.delete(objects)
      })
    } catch (error) {
      console.error('删除失败', error)
    }
  }
}

export default DataTable