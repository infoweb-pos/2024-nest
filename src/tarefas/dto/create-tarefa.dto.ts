export class CreateTarefaDto {
  titulo: string;
  descricao?: string;
  concluido?: boolean = false;
}
