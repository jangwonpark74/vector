import cpuRatioModel from '../processors/cpuRatioModel'

export default {
  group: 'CPU',
  title: 'CPU Utilization (System)',
  processor: cpuRatioModel,
  config: {
    metricNames: [
      'kernel.all.cpu.sys',
    ],
    divisorMetricName: 'hinv.ncpu'
  },
}
