import { Count, Filter, Where } from '@loopback/repository';
import { Proponentes } from '../models';
import { ProponentesRepository } from '../repositories';
export declare class ProponentesController {
    proponentesRepository: ProponentesRepository;
    constructor(proponentesRepository: ProponentesRepository);
    create(proponentes: Proponentes): Promise<Proponentes>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Proponentes[]>;
    updateAll(proponentes: Proponentes, where?: Where): Promise<Count>;
    findById(id: number): Promise<Proponentes>;
    updateById(id: number, proponentes: Proponentes): Promise<void>;
    deleteById(id: number): Promise<void>;
}
