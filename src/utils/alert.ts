import { AlertActions } from '@/redux/reducers';

export class AlertHelper {
    static show(
        dispatch: any,
        title: string,
        message: string,
        onAccept?: () => {},
        onCancel?: () => {}
    ) {
        dispatch(
            AlertActions.setDataAlert({
                title,
                description: message,
                onAccept,
                onCancel,
            })
        );
    }
}
