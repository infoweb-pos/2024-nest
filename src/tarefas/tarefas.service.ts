import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { TarefaEntity } from './entities/tarefa.entity';

@Injectable()
export class TarefasService {
  tarefas: TarefaEntity[] = [];
  contador: number = 0;

  create(createTarefaDto: CreateTarefaDto) {
    const tarefa = {
      id: this.contador + 1,
      ...createTarefaDto,
    };
    this.contador += 1;
    this.tarefas.push(tarefa);
    return {
      estado: 'ok',
      dados: tarefa,
    };
  }

  findAll() {
    return {
      estado: 'ok',
      dados: this.tarefas,
    };
  }

  findOne(id: number) {
    const temp = this.tarefas.filter((tarefa) => tarefa.id === id);
    if (temp[0]) {
      return {
        estado: 'ok',
        dados: temp[0],
      };
    } else {
      return {
        estado: 'nok',
        mensagem: `tarefa com #${id} não existe!`,
      };
    }
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
    if (index >= 0) {
      this.tarefas[index] = {
        ...this.tarefas[index],
        ...updateTarefaDto,
      };
      return {
        estado: 'ok',
        dados: this.tarefas[index],
      }
    }
    return {
      estado: 'nok',
      mensagem: `tarefa com #${id} não existe!`,
    };
  }

  remove(id: number) {
    const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
    if (index >= 0) {
      const tarefasRemovidas = this.tarefas.splice(index, 1);
      return {
        estado: 'ok',
        dados: tarefasRemovidas[0],
      };
    } else {
      return {
        estado: 'nok',
        mensagem: `tarefa com #${id} não existe!`,
      };
    }
  }
}
