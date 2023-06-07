import {
    Keyboard,
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native';
import React, { FunctionComponent } from 'react';
import useStyles from './styles';
import { Input, InputProps as BaseIPProps } from '@rneui/themed';
import { EyeOffIcon, EyeOnIcon, LockIcon } from '@/assets';
import { InputProps } from './types';
import { TextInputProps } from 'react-native';

const InputCustom: FunctionComponent<
    InputProps & TextInputProps & BaseIPProps
> = (props) => {
    const styles = useStyles();
    const [secure, setSecure] = React.useState<boolean>(true);
    const _renderSecure = () => {
        return (
            <TouchableOpacity onPress={() => setSecure(!secure)}>
                {secure ? <EyeOffIcon /> : <EyeOnIcon />}
            </TouchableOpacity>
        );
    };

    return (
        <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
            <Input
                secureTextEntry={props.secure && secure}
                inputContainerStyle={styles.inputContainer}
                placeholder={props.placeholder}
                leftIcon={(props.secure && <LockIcon />) || props.leftIcon}
                leftIconContainerStyle={styles.icon}
                rightIconContainerStyle={styles.icon}
                rightIcon={props.secure && _renderSecure()}
                inputStyle={styles.input}
                style={styles.input}
                value={props.value}
                onChangeText={props.onChangeText}
                renderErrorMessage={false}
                placeholderTextColor={styles.placeHolder.color}
                {...props}
            />
        </TouchableNativeFeedback>
    );
};

export default InputCustom;
