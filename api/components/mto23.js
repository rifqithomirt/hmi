export default {
  type: 'motor',
  id: 'mto23',
  name: 'M.TO23',
  description: 'Motor MTO23',
  state: {
    active: false,
    alarm_1: false,
    alarm_2: false,
    auto: false
  },
  meta: {
    defaultImg: 'MTO23_Run',
    img: 'MTO23',
    position: {
      x: 928, y: 431
    }
  },
  checkAlarm: (item) => {
    return (item.state.alarm_1 || item.state.alarm_2)
  },
  panel: (item) => {
    return `
      <div class="header">${item.name}</div>
      <div class="content">
        <div>${(item.state.active) ? 'Running' : 'Off'}</div>
        <div>${(item.state.auto) ? 'Automatic' : 'Manual'}</div>
      </div>
    `
  },
  menu: (item) => {
    return [
      {
        name: 'Control',
        child: [
          { type: 'button', name: 'button_start', class: 'green', text: 'Start', icon: ['fas', 'play'], disable: (item.state.active || item.state.auto), onClick: (item) => { item.state.active = !item.state.active } },
          { type: 'button', name: 'button_stop', class: 'red', text: 'Stop', icon: ['fas', 'stop'], disable: (!item.state.active || item.state.auto), onClick: (item) => { item.state.active = !item.state.active } }
        ]
      },
      {
        name: 'Alarm',
        child: [
          {
            type: 'display',
            name: 'display_alarm_1',
            render: item => `
              <div class="tw-flex tw-flex-col">
                <div>
                  <div class="badge-box ${(item.state.alarm_1) ? 'red' : ''}"></div> Circuit Breaker
                </div>
                <div>
                  <div class="badge-box ${(item.state.alarm_2) ? 'red' : ''}"></div> Disconnected
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
    } else if (item.state.active) {
      name += '_Run'
    } else {
      return null
    }
    return name
  }
}
