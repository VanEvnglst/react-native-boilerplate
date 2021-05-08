import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Input = props => {
  const {
    block,
    disabled,
    type,
    multiline,
    placeholder,
    secureText,
    onChangeText,
  } = props;

  return(
      <TextInput
        style={[
          styles.container,
          block && styles.block,
          disabled && styles.disabled
        ]}
        editable={!disabled}
        keyboardType={type}
        multiline={multiline}
        clearButtonMode={'unless-editing'}
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
      />
  );
}

Input.propTypes = {
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  multiline: PropTypes.bool,
  secureText: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.any,
  onChangeText: PropTypes.func.isRequired
}

Input.defaultProps = {
  disabled: false,
  block: false,
  multiline: false,
  secureText: false,
  placeholder: 'Input placeholder',
  type: '',
  onChangeText: () => {}
}

export default Input;



