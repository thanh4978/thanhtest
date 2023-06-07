import { View } from 'react-native';
import React, { FunctionComponent } from 'react';
import HeaderDetail from './HeaderDetail';
import { JobTitle, StyledText } from '@/components/customs';
import { useRoute } from '@react-navigation/native';
import { JobType } from '@/types';
import useStyles from './styles';
import TabDetail from './TabDetail';
import { Button } from '@rneui/themed';
import { ModalWrapContent } from '@/components/shared';

interface RouteParams {
    data: JobType;
}

const JobDetail: FunctionComponent = () => {
    const styles = useStyles();
    const route = useRoute();
    const data = (route.params as RouteParams)?.data;
    const [visible, setVisible] = React.useState<boolean>(false);
    return (
        <View style={styles.container}>
            {/* Header */}
            <HeaderDetail data={data} />

            {/* Info Job */}
            <JobTitle data={data} style={styles.jobTitleStyle} />

            {/* Detail Job */}
            <TabDetail />

            {/* Button Apply */}
            <View style={styles.containerButton}>
                <Button
                    style={styles.button}
                    containerStyle={styles.buttonContainer}
                    title={'Apply'}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitle}
                    activeOpacity={0.5}
                    onPress={() => setVisible(!visible)}
                />
                <ModalWrapContent
                    isVisible={visible}
                    contentStyle={styles.modal}
                    onBackdropPress={() => setVisible(!visible)}
                >
                    <View style={styles.modalWrapper}>
                        <StyledText style={styles.textModal} fontWeight="bold">
                            Apply Job
                        </StyledText>
                        <View style={styles.buttonWrapper}>
                            <Button
                                title={'Apply with CV'}
                                buttonStyle={styles.buttonApplyCVStyle}
                                titleStyle={styles.titleApplyCV}
                            />
                            <View style={{ width: 10 }} />
                            <Button
                                title={'Apply with Profile'}
                                buttonStyle={styles.buttonApplyPFStyle}
                                titleStyle={styles.titleApplyPF}
                            />
                        </View>
                    </View>
                </ModalWrapContent>
            </View>
        </View>
    );
};

export default JobDetail;
