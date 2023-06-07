import {
    AddUserIcon,
    CertificationIcon,
    ChartIcon,
    EducationIcon,
    ProjectsIcon,
    SeminarsIcon,
    SkillsIcon,
    StarIcon,
    SummaryIcon,
    ThreeUserIcon,
    TwoUserIcon,
    UserIcon,
    WorkIcon,
} from '@/assets';
import React from 'react';
import { SvgProps } from 'react-native-svg';

export class MenuProfileType {
    private constructor(
        public readonly _id: string,
        public readonly title: string,
        public readonly logoIcon: React.MemoExoticComponent<
            (props: SvgProps) => React.JSX.Element
        >
    ) {}

    static readonly CONTACT_INFORMATION = new MenuProfileType(
        '1',
        'Contact Information',
        UserIcon
    );
    static readonly SUMMARY = new MenuProfileType('2', 'Summary', SummaryIcon);
    static readonly EXPECTED_SALARY = new MenuProfileType(
        '3',
        'Expected Salary',
        ChartIcon
    );
    static readonly WORK_EXPERIENCE = new MenuProfileType(
        '4',
        'Work Experience',
        WorkIcon
    );
    static readonly EDUCATION = new MenuProfileType(
        '5',
        'Education',
        EducationIcon
    );
    static readonly PROJECTS = new MenuProfileType(
        '6',
        'Projects',
        ProjectsIcon
    );
    static readonly CERTIFICATION_AND_LICENSES = new MenuProfileType(
        '7',
        'Certification and Licenses',
        CertificationIcon
    );
    static readonly VOLUNTEERING_EXPERIENCE = new MenuProfileType(
        '8',
        'Volunteering Experience',
        TwoUserIcon
    );
    static readonly PROFESSIONAL_EXAMS = new MenuProfileType(
        '9',
        'Profession Exams ',
        ProjectsIcon
    );
    static readonly AWARDS_ACHIVEMENTS = new MenuProfileType(
        '10',
        'Awards & Achivements',
        StarIcon
    );
    static readonly SEMINARS_TRAININGS = new MenuProfileType(
        '11',
        'Seminars Trainings',
        SeminarsIcon
    );
    static readonly ORGANIZATION_ACTIVITIES = new MenuProfileType(
        '12',
        'Organization Activites',
        ThreeUserIcon
    );
    static readonly LANGUAGES = new MenuProfileType(
        '13',
        'Languaes',
        ProjectsIcon
    );

    static readonly SKILLS = new MenuProfileType('14', 'Skills', SkillsIcon);
    static readonly AFFILLIATIONS = new MenuProfileType(
        '15',
        'Affilliations',
        ThreeUserIcon
    );
    static readonly REFERENCES = new MenuProfileType(
        '16',
        'Reffrences',
        AddUserIcon
    );
    static readonly CV_RESUME = new MenuProfileType(
        '17',
        'CV/RESUME',
        ProjectsIcon
    );
}

export const menuTypes = [
    MenuProfileType.CONTACT_INFORMATION,
    MenuProfileType.SUMMARY,
    MenuProfileType.EXPECTED_SALARY,
    MenuProfileType.WORK_EXPERIENCE,
    MenuProfileType.EDUCATION,
    MenuProfileType.PROJECTS,
    MenuProfileType.CERTIFICATION_AND_LICENSES,
    MenuProfileType.VOLUNTEERING_EXPERIENCE,
    MenuProfileType.PROFESSIONAL_EXAMS,
    MenuProfileType.AWARDS_ACHIVEMENTS,
    MenuProfileType.SEMINARS_TRAININGS,
    MenuProfileType.ORGANIZATION_ACTIVITIES,
    MenuProfileType.LANGUAGES,
    MenuProfileType.SKILLS,
    MenuProfileType.AFFILLIATIONS,
    MenuProfileType.REFERENCES,
    MenuProfileType.CV_RESUME,
];
