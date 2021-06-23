export default {
  type: 'motor',
  id: 'vlv01',
  name: 'VLV01',
  description: 'Valve TO KULTUR',
  state: {
    open: false,
    alarm_1: false,
    auto: false
  },
  meta: {
    defaultImg: 'VLV01_Run',
    img: 'VLV01',
    position: {
      x: 669, y: 255
    },
    componentSpot: {
      position: {
        x: 671,
        y: 256
      },
      size: {
        w: 26,
        h: 24
      }
    },
    panel: {
      position: 'right'
    }
  },
  checkAlarm: (item) => {
    return (item.state.alarm_1 || item.state.alarm_2)
  },
  panel: (item) => {
    return `
      <div class="header">${item.name}</div>
      <div class="content">
        <div>${(item.state.open) ? 'Open' : 'Close'}</div>
        <div>${(item.state.auto) ? 'Automatic' : 'Manual'}</div>
      </div>
    `
  },
  menu: (item) => {
    return [
      {
        name: 'Control',
        child: [
          { type: 'button', name: 'button_start', class: 'icon green', text: '', icon: ['fas', 'play'], disable: (item.state.open || item.state.auto), onClick: (item) => { item.state.open = !item.state.open } },
          { type: 'button', name: 'button_stop', class: 'icon red', text: '', icon: ['fas', 'stop'], disable: (!item.state.open || item.state.auto), onClick: (item) => { item.state.open = !item.state.open } }
        ]
      },
      {
        name: 'Alarm',
        child: [
          {
            type: 'display',
            name: 'display_alarm_1',
            render: item => `
              <div class="display">
                <div class="display_text">
                  <div class="badge-box ${(item.state.alarm_1) ? 'red' : ''}"></div> Feedback Failure
                </div>
              </div>
            `,
            onClick: (item) => {}
          }
        ]
      },
      {
        name: 'Control',
        class: 'tw-w-full',
        child: [
          { type: 'button', name: 'button_auto', class: `fixed ${(item.state.auto ? 'green' : 'red')}`, text: (item.state.auto ? 'Auto' : 'Manual'), disable: (false), onClick: (item) => { item.state.auto = !item.state.auto } }
        ]
      }
    ]
  },
  onImgShow: (item) => {
    let name = `${item.meta.img}`
    if (item.state.alarm_1) {
      name += '_Alarm'
    } else if (item.state.open) {
      name += '_Run'
    } else {
      return null
    }
    return name
  }
}
