import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Proponentes} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProponentesRepository extends DefaultCrudRepository<
  Proponentes,
  typeof Proponentes.prototype.id
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Proponentes, dataSource);
  }
}
