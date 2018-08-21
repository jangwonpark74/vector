// https://github.com/plotly/plotly.py/pull/883/files

const cividis = [
  [0.000000, 'rgb(0,32,76)'], [0.058824, 'rgb(0,42,102)'],
  [0.117647, 'rgb(0,52,110)'], [0.176471, 'rgb(39,63,108)'],
  [0.235294, 'rgb(60,74,107)'], [0.294118, 'rgb(76,85,107)'],
  [0.352941, 'rgb(91,95,109)'], [0.411765, 'rgb(104,106,112)'],
  [0.470588, 'rgb(117,117,117)'], [0.529412, 'rgb(131,129,120)'],
  [0.588235, 'rgb(146,140,120)'], [0.647059, 'rgb(161,152,118)'],
  [0.705882, 'rgb(176,165,114)'], [0.764706, 'rgb(192,177,109)'],
  [0.823529, 'rgb(209,191,102)'], [0.882353, 'rgb(225,204,92)'],
  [0.941176, 'rgb(243,219,79)'], [1.000000, 'rgb(255,233,69)']
]

// TODO remove this
// override the first element so we get white bg
cividis[0] = [0.0000001, 'rgb(255,255,255)']

const _thresholds = cividis.map(v => v[0])
const _colors = cividis.map(v => v[1])

export const thresholds = _thresholds
export const colors = _colors
