import { EditIcon } from '@/assets';
import { Avatars } from '@/components/customs';
import React, { FunctionComponent } from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import { useAppSelector } from '@/hooks';
import { getAuthUser } from '@/redux/selectors';
import { NavigationService } from '@/navigation/NavigationService';
import { routes } from '@/constants';

const UserAvatar: FunctionComponent = () => {
    const styles = useStyles();
    const user = useAppSelector(getAuthUser);

    return (
        <View>
            <Avatars
                bigTitle={user?.name || ''}
                smallTitle="UI/UX Designer of Paypal Inc. asasfasf wfas"
                rightIcon={<EditIcon />}
                bigTitleStyle={styles.bigTitleStyle}
                rightIconPress={() =>
                    NavigationService.navigate(routes.EDIT_PROFILE)
                }
                smallTitleStyle={styles.smallTitleStyle}
                bigWeight="bold"
                source={{ uri: user?.photo || '' }}
                smallWeight="variable"
                containerStyle={styles.containerStyle}
            />
            {/* Line */}
            <View style={styles.line} />
        </View>
    );
};

export default UserAvatar;
