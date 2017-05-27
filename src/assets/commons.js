import Noty from 'noty'

var noty = {
  Show(msg, callback) {
    let n = new Noty({
      layout: 'topCenter',
      theme: 'metroui',
      closeWith: ['butto'],
      text: `
            <div style="width:200px;">
              <div style="margin:20px;width:200px;"><h3>${msg}</h3></div>
            </div>
        `,
      buttons: [
        Noty.button('YES', 'btn btn-success', () => {
          callback()
          n.close()
        }),
        Noty.button('NO', 'btn btn-danger', () => {
          n.close()
        })
      ]
    }).show()
  },
  TopRightShow(msg) {
    new Noty({
      type: 'info',
      layout: 'topRight',
      theme: 'metroui',
      animation: {
        open: 'noty_effects_open',
        close: 'noty_effects_close'
      },
      timeout: 3000,
      text: `<h4>${msg}</h4>`
    }).show()
  }
}

export { noty }
