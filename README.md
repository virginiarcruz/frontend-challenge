# Desafio FrontEnd

Projeto desenvolvido para seleção de FrontEnd na [Conta Azul](https://contaazul.com)

## Instalação

    $ git clone git@github.com:virginiarcruz/frontend-challenge.git
    $ cd frontend-challenge
    $ npm install

## Iniciar a aplicação em localhost

    $ npm start


### Comandos para executar tarefas no projeto


### Testes
``` bash
$ npm run test

# roda os testes em watch
$ npm run test:tdd

# produz relatórios de cobertura para os testes realizados
$ npm run test:coverage
```


### Build

  - Compilar os arquivos otimizados para produção na pasta ``dist`` na raiz do projeto.

        $ npm run build


### Para editar o Sass e gerar os arquivos para produção

```bash
# irá assistir as modificações realizadas e compilar os arquivos para gerar o css da aplicação.
$ grunt dev

# gera os arquivos minificados  de ``css`` e ``js`` para produção.
$ grunt build
```

