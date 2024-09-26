// src/backend/database/entities.ts

export class User {
    phone: string;
    isVerified: boolean;
    emergencyContact: string;
    walletBalance: number;

    constructor(phone: string, isVerified: boolean, emergencyContact: string, walletBalance: number) {
        this.phone = phone;
        this.isVerified = isVerified;
        this.emergencyContact = emergencyContact;
        this.walletBalance = walletBalance;
    }
}

export class Report {
    // Define properties and constructor for Report entity
}

export class EvacuationArea {
    // Define properties and constructor for EvacuationArea entity
}

export class HelpOffer {
    // Define properties and constructor for HelpOffer entity
}

export class Token {
    // Define properties and constructor for Token entity
}

// Export an array of entities
export const ENTITIES = [
    User,
    Report,
    EvacuationArea,
    HelpOffer,
    Token,
];
