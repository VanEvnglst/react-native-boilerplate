import { View, Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = props => {
  const { 
    children,
    onPress,
    onLongPress,
    disable,
    secondary,
    block,
    textStyle,
    style,
  } = props;

  return(
    <Pressable
      style={[
        styles.btnContainer,
        block && styles.btnBlock,
        disable && styles.btnDisabled,
        secondary && styles.secondaryContainer,
        style,
      ]}
      disabled={disable}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View styles={styles.btnChildren}>
        <Text
          style={[
            styles.textStyle,
            textStyle,
          ]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
  block: PropTypes.bool,
  disable: PropTypes.bool,
  secondary: PropTypes.bool,
  textStyle: PropTypes.any,
}

Button.defaultProps = {
  block: false,
  disable: false,
  secondary: false,
  textStyle: '',
}

export default Button;