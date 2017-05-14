export const decimalComma = (val) => {
  val = val + ''
  var re = /(-?\d+)(\d{3})/
  while (re.test(val)) {
    val = val.replace(re, '$1,$2')
  }
  return val
}
