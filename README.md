<h1 align="center">API Biomastats - ceMECA | CreativeGrow</h1>

<div align="center">

[![Creative](https://img.shields.io/badge/ead-Creative-blue)](https://creativegrow.dev.br/cursos/) 
[![License](https://img.shields.io/badge/license-GPL--3.0-orange)](./LICENSE)
[![Suporte](https://img.shields.io/badge/atendimento-online-orange)](https://cloud.creativegrow.dev.br/call/kvhw5mn7)
[![Agendamento](https://img.shields.io/badge/agendar-suporte-blue)](https://gestao.creativegrow.dev.br/appointly/appointments_public/form?col=col-md-8+col-md-offset-2)



</div>
  
<div align="center"><img src="https://apiminio.creativegrow.dev.br/aulascreativegrow/Creative%20Grow%281920%20x%20369%20px%29.png" style="width: 80% !important;"></div>

## Para Instalação você precisa:

Uma VPS Ubuntu >= 20.04 (Configuração mínima recomendada: 1 VCPU's + 2 GB RAM)
ou uma hospedagem cpanel

Endereço: Domínio ou Subdominio

Email válido para certificação SSL

## SSL

To install the SSL certificate, follow the **[instructions](https://certbot.eff.org/instructions?ws=other&os=ubuntufocal)** below.

## Link p/ Apoio:

  Assista o vídeo: https://apiminio.creativegrow.dev.br/aulascreativegrow/api_iuri.mp4

  Teste sua API Acesse: https://resttesttest.com/

## Informações Importantes:



## Vamos instalar?

  Clone o projeto.

  Crie o banco de dados MySQL e após crie o usuário para o banco.

  Dê todas as permissões ao usuário do banco.

  Crie o MySQL Remote %

  No arquivo conf.env na raiz do projeto configure:

      DB_NAME=api-iuri //nome do banco
      DB_USER=root     //usuário do banco
      DB_PASS=         //senha do banco 
      DB_HOST=localhost //servidor do banco
      DB_PORT=3306      //porta do banco

  Agora no terminal faremos a instalação...

  Obs. Caso sua hospedagem não dê acesso root ao terminal, crie o banco no seu domínio onde irá
  instalar os fontes... Faça o clone em seu desktop... Configure o conf.env para seu ambiente online e 
  execute a instalação a baixo em seu VSCode na sua máquina local... Após instalar e executar as migrations
  compacte em formato ZIP e faça o upload para a raiz pública do seu domínio... Agora é só extrair!

  Instalando as dependências do projeto:

      npm install
  
  Instalando a base de dados (migrations):

      npx sequelize-cli db:migrate


  



## Assessoria e Contato:

    CREATIVEGROW | GRUPO PIGA ASSESSORIA

    Fone: 14 3042-9678 (WhatsApp)

    Email: contato@creativegrow.dev.br

<div align="center">
    <h3>Agendar atendimento:</h3>
  <a href="https://gestao.creativegrow.dev.br/appointly/appointments_public/form?col=col-md-8+col-md-offset-2" target="_blank" rel="noopener noreferrer">
    <img src="https://www.spsp.org.br/wp-content/uploads/2019/03/Icone-Agenda-Calendario.png" style="width: 25% !important;">
  </a>
</div></br>




