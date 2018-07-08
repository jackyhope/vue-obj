import Vue from 'vue'
import { formatDate } from '../utils/index';
Vue.filter('dateFormat', function (value, formatStr, useUTC) {
  value = new Date(value);
  if (value && (value + "").indexOf("/Date") >= 0) {
    return value;
  }
  formatStr = formatStr || 'yyyy-MM-dd'
  return formatDate(value, formatStr);
});

Vue.filter('booleanFormat', function (value, format) {
  format = format || ['是', '否'];
  if (value.toString() === 'true') {
    return format[0];
  } else {
    return format[1];
  }
})