import { TouchableOpacity, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { BackIcon, SearchIcon, SortingIcon } from '@/assets';
import { InputCustom, StyledText } from '@/components/customs';
import { NavigationService } from '@/navigation/NavigationService';
import useStyles from './styles';
import { useRoute } from '@react-navigation/native';
import NotFound from './NotFound';
import Found from './Found';

interface RouteParams {
    searchValue?: string;
}

const Search: FunctionComponent = () => {
    const styles = useStyles();
    const route = useRoute();
    const routeSearch = (route.params as RouteParams)?.searchValue;
    const [searchValue, setSearchValue] = React.useState(routeSearch);

    return (
        <View style={styles.container}>
            {/* SearchBar */}
            <View style={styles.containerSearchBar}>
                <TouchableOpacity
                    onPress={() => NavigationService.goBack()}
                    style={styles.backIcon}
                >
                    <BackIcon />
                </TouchableOpacity>

                <InputCustom
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder="Search for a job or company"
                    leftIcon={<SearchIcon />}
                    containerStyle={styles.inputContainer}
                />
            </View>

            {/* Body */}
            <View style={styles.titleContainer}>
                <StyledText fontWeight="bold" style={styles.titleStyle}>
                    0 found
                </StyledText>
                <TouchableOpacity onPress={() => console.log('press')}>
                    <SortingIcon />
                </TouchableOpacity>
            </View>

            <Found />
        </View>
    );
};

export default Search;
