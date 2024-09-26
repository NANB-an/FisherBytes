// src/backend/database/database.ts

import { DatabaseStorage } from './storage';

export interface DatabaseOptions {
    sincronize: boolean;
    migrationsRun: boolean;
    storage: DatabaseStorage;
    entities: any[]; // Use specific entity type if applicable
    migrations: string[];
    logger: any; // Replace with actual logger type if applicable
}

export class Database {
    constructor(private options: DatabaseOptions) {
        // Initialize your database here
    }

    async load() {
        // Logic to load the database
    }

    async init() {
        // Logic to initialize the database
    }

    async save() {
        // Logic to save the database
    }
}
