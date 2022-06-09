import { helper } from '@ember/component/helper';

export default helper(function numberFormat(params /*, hash*/) {
  let number = params[0];
  return Intl.NumberFormat().format(number);
});
