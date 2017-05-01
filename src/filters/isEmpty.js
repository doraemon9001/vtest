export const isEmpty = (val) => {
  if (val === null || val === '' || val === undefined) {
    val = '無'
    return val
  } else return val
}
