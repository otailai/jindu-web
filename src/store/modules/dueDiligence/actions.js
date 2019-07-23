export default {
  //权限获取，即每个页面的进入权限
  setUserRole({commit},str){
    commit('setUserRole',str)
  },
  //是否载入附件表有保存按钮的头部及添加列功能
  setColBtn({commit},btnBool){
    commit('setColBtn',btnBool)
  },
  //附件表是否有添加行功能、多选、加密按钮和操作这一列的操作功能
  setRowBtn({commit},btnBool){
    commit('setRowBtn',btnBool)
  },
  //第二及第四步的附件只读属性的设置
  setOnlyReadHeader({commit},btnBool){
    commit('setOnlyReadHeader',btnBool)
  },
  //第四步以后的附件只读属性的设置
  setOnlyReadContent({commit},btnBool){
    commit('setOnlyReadContent',btnBool)
  },
  //是否从上传附件进入显示更多东西
  setUploadJumpIn({commit},btnBool){
    commit('setUploadJumpIn',btnBool)
  },
  //附件里需要标红的数组,即附件里的不合格文件的数组设置
  setUnqualifiedArr({commit},arr){
    commit('setUnqualifiedArr',arr)
  },
  //获取一个名称修改
  setAttachmentName({commit},val){
    commit('setAttachmentName',val)
  },
  //获取尽调属性ID
  setThisDueId({commit},val){
    commit('setThisDueId',val)
  },
  //获取附近内表头名称
  setContentName({commit},val){
    commit('setContentName',val)
  },
  //获取附件id(也是表头id)
  setAttachmentId({commit},val){
    commit('setAttachmentId',val)
  },
  //获取登录是否是客户（后通过登录获取，需改）
  setLoginStatus({commit},stateBool){
    commit('setLoginStatus',stateBool)
  },
  //顶部在进入审核页面出现切换视图按钮的设置
  setTabViewBtn({commit},btnBool){
    commit('setTabViewBtn',btnBool)
  },
  //进入审核页面的视图是哪一个true是客户资料，false是尽调清单 默认true
  setTabViewBtnStatus({commit},btnBool){
    commit('setTabViewBtnStatus',btnBool)
  },
  //当前公司的相关信息
  setCompanyAboutData({commit},obj){
    commit('setCompanyAboutData',obj)
  },
  //附件里是否有加密按钮
  setEncryptionBool({commit},btnBool){
    commit('setEncryptionBool',btnBool)
  },
  //附件里是否有加密按钮
  setCompanyIdStr({commit},str){
    commit('setCompanyIdStr',str)
  },
  //是否是第八步进入附件
  setEightJumpIn({commit},Bool){
    commit('setEightJumpIn',Bool)
  },
  //是否是第二步进入附件
  setTwoJumpIn({commit},Bool){
    commit('setTwoJumpIn',Bool)
  },
}