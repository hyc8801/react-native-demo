export default user_table = {
  name: "user",
  primaryKey: "uid", // 定义主键后，无法创建同一主键的数据
  properties: {
    uid: "string",
    name: "string", // {type: 'string'} 的简写
    phone: { type: "string", default: "136xxxxxxxx" }
  }
};

