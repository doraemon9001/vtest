import axios from 'axios'
function test() {
  let ii = 0
  axios({
    method: 'get',
    url: '/api/Employee/Get'
  }).then(employee => {
    ii = employee.data.data[0].全勤獎金
  })
  return ii
}

export {
  test
}
