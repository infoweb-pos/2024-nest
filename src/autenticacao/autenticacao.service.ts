import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PersistenciaService } from 'src/persistencia/persistencia.service';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AutenticacaoService {
  constructor(
    private persistencia: PersistenciaService,
    private jwt: JwtService,
  ) {}

  // regra de negócio
  async login(apelido: string, senha: string): Promise<TokenDto> {
    const usuario = await this.persistencia.usuario.findUnique({
      where: { apelido: apelido },
    });
    if (!usuario) {
      throw new NotFoundException(`Usuário ${apelido} não encontrado`);
    }

    const ehSenhaValida = usuario.senha === senha;
    if (!ehSenhaValida) {
      throw new UnauthorizedException();
    }
    return {
      accessToken: this.jwt.sign({ usuario: usuario.id }),
    };
  }
}
