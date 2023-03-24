export const numArr = Array.from({ length: 1000 }).map((item, index) => {
  if (index < 10) {
    return '00' + index
  } else if (index < 100) {
    return '0' + index
  }
  return index
})
export const expressArr = ['FTI', 'web', 'aa', 'asdadsd', 'asdasdasda', 'asduhasiud']


export const equipTypeList = ['FTI', '外部测量设备', '大气数据鼓励设备', '工业相机', '转台']
export const equipStateList = ['无效', '驱动故障', '无效 驱动故障']
