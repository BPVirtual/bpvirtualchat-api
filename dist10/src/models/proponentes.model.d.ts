import { Entity } from '@loopback/repository';
export declare class Proponentes extends Entity {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    nacionalidade: string;
    dataNascimento: string;
    sexo: string;
    estadoCivil: string;
    profissao: string;
    cargo: string;
    dataAdmissao: string;
    salario: string;
    endereco: {
        logradouro: string;
        bairro: string;
        cep: string;
        cidade: string;
        uf: string;
    };
    empresa: {
        razaoSocial: string;
        cnpj: string;
    };
    consultor: {
        nome: string;
        email: string;
    };
    constructor(data?: Partial<Proponentes>);
}
