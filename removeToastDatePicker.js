const fs = require('fs');

const readWriteSync = async (filePath, stringsToRemove) => {
  console.log('readWriteSync ...');

  let data = await fs.readFileSync(filePath, 'utf-8');

  stringsToRemove.forEach((str) => {
    data = data.replace(str, '');
  });

  await fs.writeFileSync(filePath, data, 'utf-8');
  console.log('readWriteSync complete');
};

readWriteSync('node_modules/@sproutsocial/racine/lib/index.js', [
  'export { SingleDatePicker, DateRangePicker } from "./DatePicker";',
  'export { default as ToastContainer, toast } from "./Toast";',
]);

readWriteSync('node_modules/@sproutsocial/racine/commonjs/index.js', [
  'exports.DateRangePicker = exports.SingleDatePicker = ',
  'exports.toast = ',
  'exports.ToastContainer = ',
  'var _Toast = _interopRequireWildcard(require("./Toast"));',
  'exports.ToastContainer = _Toast.default;',
  'exports.toast = _Toast.toast;',
  'var _DatePicker = require("./DatePicker");',
  'exports.SingleDatePicker = _DatePicker.SingleDatePicker;',
  'exports.DateRangePicker = _DatePicker.DateRangePicker;',
]);
