export type RouteStackParamList = {
    HomePage: undefined;
    ProfileHome: undefined;
    DoctorProfileDetails: undefined;
    ProfileSuccess: undefined;
    AddClinicPage: undefined;
    ClinicDetailsPage: undefined;
    ClinicDetails: undefined;
    ClinicSuccess: undefined;
    AppointmentPage: undefined;
    AppointmentDetails: undefined;
    AppointmentCountDetails: undefined;
    Menu: undefined;
    Details: { patientId: number, patientName: string, patientAge: number, patientGender: string, patientMobile: number };
    Routes: undefined;
    Actions: { patientId: number, patientName: string, patientAge: number, patientGender: string, patientMobile: number };
    List: { patientId: number, patientName: string, patientAge: number, patientGender: string, patientMobile: number };
    Symptoms: undefined,
    SymptomsList: { symptoms: object };
    SymptomsManage: { symptoms: object };

    Prescription: undefined;
    PrescriptionList: { prescriptionView: object };
    PrescriptionManage: { prescription: object };
    PrescriptionView: { prescription: object, prescriptionDose: object, startFrom: string, instructions: string }

    Advices: undefined;
    AdvicesList: { advices: object, checkedAdvices: object };
    AdvicesManage: { advices: object, checkedAdvices: object };
    StaticAdvices: { undefined };

    Vitals: { undefined };
    Pulse: { undefined };
    SpO: { undefined };
    BloodPressure: { undefined };
    RespiratoryRate: { undefined };
    Temperature: { undefined };
    Height: { undefined };
    Weight: { undefined };
    BMI: { undefined };
    SystolicBP: { undefined };
    DiastolicBP: { undefined };

    Notes: { undefined };


    Specialisation: { undefined };
    ListSpecialisation: { undefined };
    ViewSpecialisation: { undefined };


    MedicalHistory: { undefined };

    PatientMedicalHistory: { undefined };
    PatientMedicalHistoryList: { patientHistory: object };
    PatientMedicalHistoryManage: { patientHistory: object };

    FamilyMedicalHistory: { undefined };
    FamilyMedicalHistoryList: { familyHistory: object };
    FamilyMedicalHistoryManage: { familyHistory: object };

    LifestyleHabit: { undefined };
    ListLifestyleHabit: { undefined };
    ManageLifestyleHabit: { habit: object };

    FoodAllergy: { undefined };
    FoodAllergyList: { allergy: [] };
    FoodAllergyManage: { undefined };

    DrugAllergy: { undefined };
    DrugAllergyList: { undefined };
    DrugAllergyManage: { undefined };

    PastProcedures: { undefined };
    PastProceduresList: { undefined };
    PastProcedureManage: { undefined };


    Followups: { patientId: number, patientName: string, patientAge: number, patientGender: string, patientMobile: number };

    CurrentMedication: { undefined };
    CurrentMedicationList: {};
    CurrentMedicationManage: { medication };

    TravelHistory: { undefined };
    TravelHistoryList: { undefined };
    TravelHistoryManage: { undefined };

    OtherMedicalHistory: { undefined };
    OtherMedicalHistoryAdd: { undefined };
    OtherMedicalHistoryManage: { undefined };
    Footer: undefined;

};