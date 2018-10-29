import { Entity, model, property } from '@loopback/repository';

@model()
export class Proponentes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  nome: string;

  @property({
    type: 'string',
  })
  sobrenome: string;

  @property({
    type: 'string',
  })
  cpf: string;

  @property({
    type: 'string',
  })
  nacionalidade: string;

  @property({
    type: 'string',
  })
  dataNascimento: string;

  @property({
    type: 'string',
  })
  sexo: string;

  @property({
    type: 'string',
  })
  estadoCivil: string;

  @property({
    type: 'string',
  })
  profissao: string;

  @property({
    type: 'string',
  })
  cargo: string;

  @property({
    type: 'string',
  })
  dataAdmissao: string;

  @property({
    type: 'string',
  })
  salario: string;

  @property({
    type: 'Object',
  })
  endereco: {
    logradouro: string,
    bairro: string,
    cep: string,
    cidade: string,
    uf: string,
  };

  @property({
    type: 'Object',
  })
  empresa: {
    razaoSocial: string,
    cnpj: string,
  };

  @property({
    type: 'Object',
  })
  consultor: {
    nome: string,
    email: string,
  };

  constructor(data?: Partial<Proponentes>) {
    super(data);
  }

}
