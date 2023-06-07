export type AlertState = {
    isShow: boolean;
    title: string;
    description: string;
    onAccept: () => void;
    onCancel: () => void;
};
