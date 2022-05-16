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
    nutriCodigo?: string;
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
// Generated by https://quicktype.io

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

export interface CitasDto {
    id_agenda:          string;
    idPaciente:         string;
    idEspecialista:     string;
    iCalUID:            string;
    start:              string;
    end:                string;
    correoEspecialista: string;
    correoPaciente:     string;
    id:                 string;
    name:               string;
    userType:           string;
    fathersLastName:    string;
    mothersLastName:    string;
    email:              string;
    sex:                string;
    birthDate:          string;
    phoneNumber:        string;
}

// Generated by https://quicktype.io

export interface SearchDoctorByPC {
    userId:      string;
    cedula:      string;
    houseNumber: string;
    streetName:  string;
    postalCode:  string;
    user:        User;
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

export interface FoodDto {
    recipe: Recipe;
    _links: Links;
}

export interface Links {
    self: Self;
}

export interface Self {
    href:  string;
    title: Title;
}

export enum Title {
    Self = "Self",
}

export interface Recipe {
    uri:             string;
    label:           string;
    image:           string;
    images:          Images;
    source:          string;
    url:             string;
    shareAs:         string;
    yield:           number;
    dietLabels:      string[];
    healthLabels:    string[];
    cautions:        string[];
    ingredientLines: string[];
    ingredients:     Ingredient[];
    calories:        number;
    totalWeight:     number;
    totalTime:       number;
    cuisineType:     string[];
    mealType:        MealType[];
    dishType:        string[];
    totalNutrients:  { [key: string]: Total };
    totalDaily:      { [key: string]: Total };
    digest:          Digest[];
}

export interface Digest {
    label:        string;
    tag:          string;
    schemaOrgTag: SchemaOrgTag | null;
    total:        number;
    hasRDI:       boolean;
    daily:        number;
    unit:         Unit;
    sub?:         Digest[];
}

export enum SchemaOrgTag {
    CarbohydrateContent = "carbohydrateContent",
    CholesterolContent = "cholesterolContent",
    FatContent = "fatContent",
    FiberContent = "fiberContent",
    ProteinContent = "proteinContent",
    SaturatedFatContent = "saturatedFatContent",
    SodiumContent = "sodiumContent",
    SugarContent = "sugarContent",
    TransFatContent = "transFatContent",
}

export enum Unit {
    Empty = "%",
    G = "g",
    Kcal = "kcal",
    Mg = "mg",
    Μg = "µg",
}

export interface Images {
    THUMBNAIL: Large;
    SMALL:     Large;
    REGULAR:   Large;
    LARGE?:    Large;
}

export interface Large {
    url:    string;
    width:  number;
    height: number;
}

export interface Ingredient {
    text:         string;
    quantity:     number;
    measure:      Measure | null;
    food:         string;
    weight:       number;
    foodCategory: string;
    foodId:       string;
    image:        string;
}

export enum Measure {
    Clove = "clove",
    Cup = "cup",
    Ounce = "ounce",
    Pound = "pound",
    Slice = "slice",
    Tablespoon = "tablespoon",
    Teaspoon = "teaspoon",
    Unit = "<unit>",
    Wedge = "wedge",
}

export enum MealType {
    LunchDinner = "lunch/dinner",
}

export interface Total {
    label:    string;
    quantity: number;
    unit:     Unit;
}
 
// Generated by https://quicktype.io

export interface Patient {
    userId:      string;
    nutriCodigo: NutriCodigo;
}

export interface NutriCodigo {
    id:             string;
    sexo:           string;
    birthDate:      string;
    nombre:         string;
    createdAt:      string;
    updatedAt:      string;
    alturaPaciente: string;
    doctor:         Doctor;
    avances:        any[];
    registros:      any[];
    meta:           null;
    ejercicio:      Ejercicio[];
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
    time:      number;
}
