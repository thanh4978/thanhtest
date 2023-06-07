export type JobType = {
    _id: number;
    logo: string;
    nameJob: string;
    nameCompany: string;
    address: string;
    salary: string;
    category: string[];
};

export type DetailJobType = {
    _id: number;
    title: string;
    data: RequireInfomationType[];
};

export type RequireInfomationType = {
    _id: number;
    title: string;
};
