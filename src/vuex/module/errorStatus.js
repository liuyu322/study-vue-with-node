const state = {
  // admin user 模块
  '2001001': '该会员已经存在',
  '2001002': 'document操作错误',
  '2001003': '数据参数错误',
  '2001004': '用户名或密码错误',
  '2001005': '该会员已经存在',
  '2001006': '该会员已经存在',
  '2000403': '登陆已过期，请重新登陆'
 };
const getters = {
    ['getStatus'](state) {
        return state;
    }
}
export default {
    state
}
