'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    id: {type: INTEGER,primaryKey: true,autoIncrement: true},
    email: {type: STRING(160),unique: true,comment: '用户邮箱'},
    phone: {type: STRING(20),unique: true,comment: '用户手机'},
    username: {type: STRING(30),allowNull: false,defaultValue: '',unique: true,comment: '用户名称'},
    nickname: {type: STRING(30),allowNull: false,defaultValue: '',comment: '昵称',},
    password: {
      type: STRING(200),
      allowNull: false,
      defaultValue: '',
      // set(val){
      //     const crypto = require('crypto');
      //     const hmac = crypto.createHash("sha256", app.config.crypto.secret);
      //     hmac.update(val);
      //     let hash =  hmac.digest("hex");
      //     this.setDataValue('password',hash)
      // }
    },
    sex: {type: INTEGER(1), allowNull: false, defaultValue: 1,comment: '用户性别 1男 2女 3保密'},
    sign: {type: STRING(200),allowNull: false,defaultValue: '',comment: '个性签名'},
    area: {type: STRING(200),allowNull: false, defaultValue: '', comment: '地区'},
    avatar: {type: STRING(200),allowNull: true,defaultValue: ''},
    status: {type: INTEGER(1),allowNull: false,defaultValue: 1,comment: '状态 0禁用1启用'},
    created_at: DATE,
    updated_at: DATE
  });

  return User;
};