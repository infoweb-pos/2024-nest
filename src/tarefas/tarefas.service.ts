import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { TarefaEntity } from './entities/tarefa.entity';
import { PersistenciaService } from 'src/persistencia/persistencia.service';

@Injectable()
export class TarefasService {
  tarefas: TarefaEntity[] = [];
  contador: number = 0;

  constructor(private persistencia: PersistenciaService) {}

  async create(createTarefaDto: CreateTarefaDto) {
    // const tarefa = {
    //   id: this.contador + 1,
    //   ...createTarefaDto,
    // };
    // this.contador += 1;
    // this.tarefas.push(tarefa);
    const tarefa = await this.persistencia.tarefa.create({
      data: createTarefaDto,
    });
    return {
      estado: 'ok',
      dados: tarefa,
    };
  }

  async findAll() {
    // return {
    //   estado: 'ok',
    //   dados: this.tarefas,
    // };
    return {
      estado: 'ok',
      dados: await this.persistencia.tarefa.findMany({}),
    };
  }

  async findOne(id: number) {
    // const temp = this.tarefas.filter((tarefa) => tarefa.id === id);
    // if (temp[0]) {
    //   return {
    //     estado: 'ok',
    //     dados: temp[0],
    //   };
    // } else {
    //   return {
    //     estado: 'nok',
    //     mensagem: `tarefa com #${id} não existe!`,
    //   };
    // }
    const tarefa = await this.persistencia.tarefa.findUnique({
      where: { id: id },
    });
    if (tarefa) {
      return {
        estado: 'ok',
        dados: tarefa,
      };
    } else {
      return {
        estado: 'nok',
        mensagem: `tarefa com #${id} não existe!`,
      };
    }
  }

  async update(id: number, updateTarefaDto: UpdateTarefaDto) {
    // const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
    // if (index >= 0) {
    //   this.tarefas[index] = {
    //     ...this.tarefas[index],
    //     ...updateTarefaDto,
    //   };
    //   return {
    //     estado: 'ok',
    //     dados: this.tarefas[index],
    //   };
    // }
    // return {
    //   estado: 'nok',
    //   mensagem: `tarefa com #${id} não existe!`,
    // };
    const resultado = await this.persistencia.tarefa
      .update({
        where: { id: id },
        data: updateTarefaDto,
      })
      .then((tarefa) => {
        return {
          estado: 'ok',
          dados: tarefa,
        };
      })
      .catch((error) => {
        return {
          estado: 'nok',
          mensagem: `tarefa com #${id} não existe!`,
        };
      });
    return resultado;
  }

  async remove(id: number) {
    // const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
    // if (index >= 0) {
    //   const tarefasRemovidas = this.tarefas.splice(index, 1);
    //   return {
    //     estado: 'ok',
    //     dados: tarefasRemovidas[0],
    //   };
    // } else {
    //   return {
    //     estado: 'nok',
    //     mensagem: `tarefa com #${id} não existe!`,
    //   };
    // }
    const resultado = await this.persistencia.tarefa
      .delete({ where: { id } })
      .then((tarefa) => {
        return { estado: 'ok', dados: tarefa };
      })
      .catch((error) => {
        return {
          estado: 'nok',
          mensagem: `tarefa com #${id} não existe!`,
        };
      });
    return resultado;
  }
}
