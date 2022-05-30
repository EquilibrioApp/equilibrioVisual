/* Interface para recibir los datos del usaurio al iniciar sesión */
export interface LoginData{
    /* Así es como se recibe en el endpoint del rest api */
    email: string;
    password: string;
}
/* Interface que recibe el token, es interface porque va a crecesrse en un futuro */
// export interface LoginResponse{
//     token: string;
// }

export interface LoginResponse {
    token: access_token;
    result:       Result;
}

export interface Result {
    id:              string;
    name:            string;
    userType:        string;
    fathersLastName: string;
    mothersLastName: string;
    email:           string;
    sex:             string;
    birthDate:       string;
    phoneNumber:     string;
}

export interface access_token {
    access_token: string;
}


/* Interface para recibir los datos del usaurio al registrarse */
export interface RegisterData{
    /* Así es como se recibe en el endpoint del rest api */
    id?: string;
    name: string;
    userType: string;
    fathersLastName: string;
    mothersLastName: string;
    email: string;
    password: string;
    sex: string;
    birthDate: string;
    phoneNumber: string;
    //Info en caso de ser Doctor
    
    cedula?: string;
    houseNumber?: string;
    streetName?: string;
    postalCode?: string;

    //Info en caso de ser paciente
    nutriCodigoId?: string;
}

export interface RegisterResponse{
    username: string;
    password: string;
    email: string;
    token: string;

}

//Citas

export interface AppointmentsDto {
    id_agenda:          string;
    idPaciente:         string;
    idEspecialista:     string;
    iCalUID:            string;
    start:              string;
    end:                string;
    correoEspecialista: string;
    correoPaciente:     string;
}

export interface PatientNamesResponseDto {
    pacientes: Paciente[];
}

export interface Paciente{
    nombre: string;
    correo: string;
}

// Generated by https://quicktype.io

export interface PatientsNamesDto {
    id:              string;
    name:            string;
    userType:        string;
    fathersLastName: string;
    mothersLastName: string;
    email:           string;
    sex:             string;
    birthDate:       string;
    phoneNumber:     string;
}

export interface RegistroDto {
    expedienteId:   string;
    questionOne:    boolean;
    questionTwo:    string;
    questionThree:  string;
    questionFour:   boolean;
    questionFive:   boolean;
    questionSix:    boolean;
    questionSeven:  string;
    questionEight:  string;
    questionNine:   string;
    questionTen:    string;
    questionEleven: string;
    questionTwelve: string;
}





// Generated by https://quicktype.io

export interface MetaDto {
    expedienteId: string;
    pesoInicial:  string;
    pesoMeta:     string;
    fechaMeta:    string;
}


// Generated by https://quicktype.io

// Expediente 

// Generated by https://quicktype.io

// Generated by https://quicktype.io

// export interface ExpedienteDto{
//     expediente:Expediente[];
// }


export interface ExpedienteDto{
    id:             string;
    sexo:           string;
    birthDate:      Date;
    nombre:         string;
    createdAt:      string;
    updatedAt:      string;
    alturaPaciente: number;
    doctor:         Doctor | null;
    avances:        Avance[];
    registros:      Registro[];
    meta:           Meta | null;
    ejercicio:      Ejercicio[];
}

export interface Avance {
    id:             string;
    observacion:    string;
    createdAt:      string;
    updatedAt:      string;
    peso:           null;
    circunferencia: null;
    indice:         null;
    pliegue:        null;
}

export interface Doctor {
    id:              string;
    name:            string;
    userType:        string;
    fathersLastName: string;
    mothersLastName: string;
    email:           string;
    sex:             string;
    birthDate:       string;
    phoneNumber:     string;
}

export interface Ejercicio {
    id:        string;
    createdAt: string;
    updatedAt: string;
    exercises: string;
}

export interface Meta {
    expedienteId: string;
    pesoInicial:  string;
    pesoMeta:     string;
    fechaMeta:    string;
}

export interface Registro {
    id:             string;
    createdAt:      string;
    questionOne:    boolean;
    questionTwo:    string;
    questionThree:  number;
    questionFour:   boolean;
    questionFive:   boolean;
    questionSix:    boolean;
    questionSeven:  number;
    questionEight:  number;
    questionNine:   number;
    questionTen:    number;
    questionEleven: number;
    questionTwelve: number;
}

export interface User {
    id:              string;
    name:            string;
    userType:        string;
    fathersLastName: string;
    mothersLastName: string;
    email:           string;
    sex:             string;
    birthDate:       string;
    phoneNumber:     string;
}
// Generated by https://quicktype.io

export interface AvancesResponseDto {
    observacion: string;
    expediente:  string;
    id:          string;
    createdAt:   string;
    updatedAt:   string;
}

// Generated by https://quicktype.io

export interface AvancesDto {
    id:             string;
    observacion:    string;
    createdAt:      string;
    updatedAt:      string;
    peso:           Peso | null;
    circunferencia: Circunferencia | null;
    indice:         Indice | null;
    pliegue:        Pliegue | null;
}

export interface Circunferencia {
    avanceId:     string;
    femoral:      string;
    biestiloideo: string;
    cuello:       string;
    cintura:      string;
    cadera:       string;
    brazo:        string;
    pierna:       string;
}

export interface Indice {
    avanceId:     string;
    masaCorporal: string;
    masaGrasa:    string;
    masaMagra:    string;
    masaOsea:     string;
    masaResidual: string;
    masaMuscular: string;
}

export interface Peso {
    avanceId: string;
    peso:     string;
}

export interface Pliegue {
    avanceId:         string;
    tricipital:       string;
    pectoral:         string;
    bicipital:        string;
    suprailiaca:      string;
    subescupular:     string;
    pantorrillaMedia: string;
    abdominal:        string;
    musloMedio:       string;
    midaxilar:        string;
}

// Generated by https://quicktype.io

export interface EquivalenciaDoctor {
    nombre:         string;
    grupoAlimencio: string;
    subgrupo:       string;
    racion:         string;
    doctor:         string;
    id:             string;
}
