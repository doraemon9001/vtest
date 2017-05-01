export const timeFormat = (time) => {
  if (time) {
    var oDate = new Date()
    oDate.setTime(time)

    var y = oDate.getFullYear()
    var m = oDate.getMonth() + 1
    var d = oDate.getDate()

    var hh = oDate.getHours()
    var mm = oDate.getMinutes()
    var ss = oDate.getSeconds()

    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
  }
}
