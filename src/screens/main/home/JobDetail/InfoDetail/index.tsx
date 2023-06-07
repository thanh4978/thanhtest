import { ScrollView, View } from 'react-native';
import React from 'react';
import useStyles from './styles';
import { InfoDetailProps } from './types';
import { DetailJobType } from '@/types/job.type';
import { DetailJobList } from '@/constants/detailJob.constant';
import { StyledText } from '@/components/customs';

const InfoDetail: React.FunctionComponent<InfoDetailProps> = (props) => {
    const styles = useStyles();
    const selectab = props.selectab;
    const [data, setData] = React.useState<DetailJobType>(
        DetailJobList[selectab]
    );
    React.useEffect(() => {
        setData(DetailJobList[selectab]);
        return () => {};
    }, [selectab]);
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.containerContent}
                showsVerticalScrollIndicator={false}
            >
                <StyledText fontWeight="bold" style={styles.title}>
                    {data.title}:
                </StyledText>
                {data.data.map((item, index) => (
                    <StyledText key={index} style={styles.contentStyle}>
                        · {item.title}
                    </StyledText>
                ))}
            </ScrollView>
        </View>
    );
};

export default InfoDetail;
