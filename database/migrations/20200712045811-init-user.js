'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {INTEGER, DATE, STRING} = Sequelize;
    await queryInterface.createTable('users', {
      id: {type: INTEGER,primaryKey: true,autoIncrement: true},
      email: {type: STRING(160),unique: true,comment: '用户邮箱'},
      phone: {type: STRING(20),unique: true,comment: '用户手机'},
      username: {type: STRING(30),allowNull: false,defaultValue: '',unique: true,comment: '用户名称'},
      nickname: {type: STRING(30),allowNull: false,defaultValue: '',comment: '昵称',},
      password: {type: STRING(200),allowNull: false,defaultValue: ''},
      sex: {type: INTEGER(1), allowNull: false, defaultValue: 1,comment: '用户性别 1男 2女 3保密'},
      sign: {type: STRING(200),allowNull: false,defaultValue: '',comment: '个性签名'},
      area: {type: STRING(200),allowNull: false, defaultValue: '', comment: '地区'},
      avatar: {type: STRING(200),allowNull: true,defaultValue: ''},
      status: {type: INTEGER(1),allowNull: false,defaultValue: 1,comment: '状态 0禁用1启用'},
      created_at: DATE,
      updated_at: DATE
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};