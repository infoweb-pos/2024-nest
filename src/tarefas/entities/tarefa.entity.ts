export class TarefaEntity {
  id: number;
  titulo: string;
  descricao?: string;
  concluido?: boolean = false;
}
