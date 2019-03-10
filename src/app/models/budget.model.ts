export class Budget{
    name: string;
    cashAvailable: CashAvailable;
    haveToPay: HaveToPay;
    wants:Wants;
    constructor(){
        this.wants = new Wants()
        this.haveToPay = new HaveToPay()
        this.cashAvailable = new CashAvailable()
    }
}

export class CashAvailable{

    takeHomePay1: number;
    takeHomePay2: number;
    bonuses: number;
    incomeTaxRefund: number;
    otherIncome1: number;
    otherIncome2: number;
}

export class HaveToPay{

    rentMortgage: number;
    secondMortgage: number;
    realEstateTaxes: number;
    groceries: number;
    household: number;
    cellPhones: number;
    laundry: number;
    repairMaintenance: number;
    aptHomeInsurance: number;
    electricity: number;
    gasHeatingOil: number;
    water: number;
    cableSubscriptions: number;
    internet: number;
    homePhone: number;
    trash: number;
    CarPayment1: number;
    carPayment2: number;
    gas: number;
    parking: number;
    tollCharges: number;
    repairMaintenanceAuto: number;
    autoInsurance: number;
    titleRegistration: number;
    ticketsViolations: number;
    metrocardBusPass: number;
    breakfast: number;
    lunch: number;
    medicalCoPayments: number;
    healthInsurance: number;
    lifeInsurance: number;
    alimony: number;
    xhildSupport: number;
    childCare: number;
    babySitter: number;
    schoolTuition: number;
    schoolSupplies: number;
    accountingFees: number;
    legalFees: number;
    consultingFees: number;
    incomeTaxesDue: number;
    creditCard1: number;
    creditCard2: number;
    studentLoan1: number;
    studentLoan2: number;
    miscLoan: number;

}

export class Wants {

    diningOut: number;
    entertainmentMoviesOutings : number;
    taxi: number;
    carWash: number;
    shoppingAdults: number;
    shoppingChildren: number;
    haircuts: number;
    nails: number;
    gymMemberships: number;
    grooming: number;
    subscriptions: number;
    organizationDues: number;
    funMoney: number;
    entertainment: number;
    concertsSportingEvents: number;
    hobbiesSpecialInterest: number;
    fantasyLeagueFees: number;
    toysGames: number;
    books: number;
    apps: number;
    gifts: number;
    vacationsCost: number;
}



