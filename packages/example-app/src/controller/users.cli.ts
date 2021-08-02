import { cli, Command } from '@deepkit/app';
import { Logger } from '@deepkit/logger';
import { SQLiteDatabase, User } from '../database';

@cli.controller('users')
export class UsersCommand implements Command {
    constructor(protected logger: Logger, protected database: SQLiteDatabase) {
    }
    async execute(): Promise<any> {
        this.logger.log('Loading users ...');
        const users = await this.database.query(User).find();
        console.table(users);
    }
}
