'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactNative = require('react-native');

var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return React.createElement(reactNative.TouchableOpacity, {
    onPress: onClick
  }, React.createElement(reactNative.Text, null, label));
};

exports.Button = Button;
//# sourceMappingURL=seed-ts.cjs.development.js.map
