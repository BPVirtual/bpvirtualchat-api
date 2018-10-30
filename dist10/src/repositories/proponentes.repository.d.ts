import { DefaultCrudRepository } from '@loopback/repository';
import { Proponentes } from '../models';
import { MongodbDataSource } from '../datasources';
export declare class ProponentesRepository extends DefaultCrudRepository<Proponentes, typeof Proponentes.prototype.id> {
    constructor(dataSource: MongodbDataSource);
}
