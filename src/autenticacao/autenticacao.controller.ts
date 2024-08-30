import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { LoginDto } from './dto/login.dto';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) {}

  @Post('login')
  // autenticar(@Body() login: LoginDto) {
  // return this.autenticacaoService.login(login.apelido, login.senha);
  autenticar(@Body() { apelido, senha }: LoginDto) {
    return this.autenticacaoService.login(apelido, senha);
  }
}
