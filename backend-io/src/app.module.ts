import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module'; // Importe outros módulos necessários
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna as configurações disponíveis globalmente
      envFilePath: '.env', // Caminho para o arquivo de configuração (.env)
    }),
    AuthModule,
  ], // Adicione outros módulos necessários aqui
  providers: [PrismaService], // Registre os provedores de serviços aqui
  controllers: [AuthController], // Registre os provedores de serviços aqui
})
export class AppModule {}
