import { View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { Avatars, InputCustom } from '@/components/customs';
import useStyles from './styles';
import { Image } from '@rneui/themed';
import { SearchIcon, images } from '@/assets';
import RecentJob from './RecentJob';
import Recommendation from './Recommendation';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationService } from '@/navigation/NavigationService';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Device, getNowTime } from '@/utils';
import { getAuthUser } from '@/redux/selectors';

const Home: FunctionComponent = () => {
    const styles = useStyles();
    const [searchValue, setSearchValue] = React.useState('');
    const user = useAppSelector(getAuthUser);
    const dispatch = useAppDispatch();
    // dispatch(LoadingActions.hideLoading());

    const myComponentRef = React.useRef<ScrollView>(null);
    const scrollToTop = () => {
        if (myComponentRef.current) {
            myComponentRef.current.scrollTo({
                animated: true,
                y: Device.getDeviceHeight() * 0.7,
            });
        }
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} ref={myComponentRef}>
            <View style={styles.container}>
                {/* Avatar */}
                <Avatars
                    bigTitle={getNowTime()}
                    smallTitle={user?.name || ''}
                    bigTitleStyle={styles.bigtitle}
                    smallTitleStyle={styles.smalltitle}
                    containerStyle={styles.avatarContainer}
                    smallWeight="bold"
                    rightIconPress={() =>
                        NavigationService.navigate(routes.NOTIFICATION)
                    }
                    source={{ uri: user?.photo || '' }}
                />

                {/* SearchBar */}
                <InputCustom
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder="Search for a job or company"
                    leftIcon={<SearchIcon />}
                    onSubmitEditing={() => {
                        NavigationService.navigate(routes.SEARCH, {
                            searchValue,
                        });
                        setSearchValue('');
                    }}
                />

                {/* Banner  */}
                <View style={styles.bannerContainer}>
                    <Image source={images.banner_home} style={styles.banner} />
                </View>

                {/* Recommendation Job */}
                <Recommendation />
                {/* Recent Job */}
                <RecentJob scrollToTop={scrollToTop} />
            </View>
        </ScrollView>
    );
};

export default Home;
