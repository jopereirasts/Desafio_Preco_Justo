Passo a passo para rodar o teste automatizado do desafio:

1. Descompacte o arquivo zipado
Descompacte o arquivo que contém o projeto para a pasta desejada.

2. Entre no terminal e navegue até o diretório Desafio_Tecnico

3. Instale as dependências necessárias
Execute o comando abaixo para instalar o Cypress e o pacote adicional web-vitals:

```bash
npm install cypress
npm install web-vitals
```
Observação: Caso ainda não tenha o Node.js e o npm instalados, será necessário instalá-los. O Node.js inclui o npm. Se precisar de ajuda, consulte a documentação do Node.js para instalação.

4. Abra a interface gráfica do Cypress
Para abrir o Cypress no modo gráfico, execute o comando:

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress.

5. Escolha o modo e2e
Na interface gráfica que será aberta, selecione o modo "End-to-End Testing" (e2e).

6. Escolha o navegador de preferência
Na interface gráfica, após selecionar o modo e2e, o Cypress apresentará uma lista de navegadores disponíveis. Escolha o navegador de sua preferência.

7. Localize o teste na seção "Specs"
Na interface gráfica, na seção "Specs", localize o arquivo de teste chamado desafio_automatizado.cy.js. Clique sobre ele para visualizar e executar o teste.

8. Execute os testes automatizados
Após clicar no arquivo desafio_automatizado.cy.js, o Cypress começará a executar os testes diretamente no navegador selecionado. O progresso e os resultados dos testes serão exibidos em tempo real.

9. Verifique os resultados dos testes
A interface gráfica exibirá o resultado de cada teste, incluindo se houve falhas ou se todos os testes passaram.