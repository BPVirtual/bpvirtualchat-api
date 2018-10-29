import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Proponentes} from '../models';
import {ProponentesRepository} from '../repositories';

export class ProponentesController {
  constructor(
    @repository(ProponentesRepository)
    public proponentesRepository : ProponentesRepository,
  ) {}

  @post('/proponentes', {
    responses: {
      '200': {
        description: 'Proponentes model instance',
        content: {'application/json': {'x-ts-type': Proponentes}},
      },
    },
  })
  async create(@requestBody() proponentes: Proponentes): Promise<Proponentes> {
    return await this.proponentesRepository.create(proponentes);
  }

  @get('/proponentes/count', {
    responses: {
      '200': {
        description: 'Proponentes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Proponentes)) where?: Where,
  ): Promise<Count> {
    return await this.proponentesRepository.count(where);
  }

  @get('/proponentes', {
    responses: {
      '200': {
        description: 'Array of Proponentes model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Proponentes}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Proponentes)) filter?: Filter,
  ): Promise<Proponentes[]> {
    return await this.proponentesRepository.find(filter);
  }

  @patch('/proponentes', {
    responses: {
      '200': {
        description: 'Proponentes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() proponentes: Proponentes,
    @param.query.object('where', getWhereSchemaFor(Proponentes)) where?: Where,
  ): Promise<Count> {
    return await this.proponentesRepository.updateAll(proponentes, where);
  }

  @get('/proponentes/{id}', {
    responses: {
      '200': {
        description: 'Proponentes model instance',
        content: {'application/json': {'x-ts-type': Proponentes}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Proponentes> {
    return await this.proponentesRepository.findById(id);
  }

  @patch('/proponentes/{id}', {
    responses: {
      '204': {
        description: 'Proponentes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() proponentes: Proponentes,
  ): Promise<void> {
    await this.proponentesRepository.updateById(id, proponentes);
  }

  @del('/proponentes/{id}', {
    responses: {
      '204': {
        description: 'Proponentes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proponentesRepository.deleteById(id);
  }
}
