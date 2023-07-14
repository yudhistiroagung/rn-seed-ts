import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return React.createElement(TouchableOpacity, {
    onPress: onClick
  }, React.createElement(Text, null, label));
};

export { Button };
//# sourceMappingURL=seed-ts.esm.js.map
