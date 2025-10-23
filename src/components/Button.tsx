import { Pressable, Text } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated'
import { StyleSheet } from 'react-native-unistyles'
import { StyleSheet as RnStyleSheet } from 'react-native'

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    onPress?: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
    children,
    variant: _variant = 'primary',
    size: _size = 'medium',
    onPress,
}) => {

    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handlePressIn = () => {
        scale.set(withSpring(0.95));
    };

    const handlePressOut = () => {
        scale.set(withSpring(1));
    };

    const handlePress = () => {
        if (onPress) {
            runOnJS(onPress)();
        }
    };

    return (
        <Pressable
            onPress={handlePress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Animated.View style={[styles.button, animatedStyle]}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Animated.View>
        </Pressable>
    );
};

const styles = RnStyleSheet.create({
    button: {
        borderRadius: 6,
        backgroundColor: '#ff1ff4',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});

export const unistyles = StyleSheet.create(() => ({
    button: {
        borderRadius: 6,
        backgroundColor: '#ff1ff4',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
}));