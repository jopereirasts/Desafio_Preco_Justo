describe('TC01 - Generate AM CPF', () => {
  it('Generates until one that starts with 7 appears', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // It was necessary to add this fuction due to problems involving the "not safe" label
    });

    // Reach 4dev website
    cy.log(`Reaching website`);
    cy.visit('https://www.4devs.com.br/gerador_de_cpf');

    // Select 'No' option for the score question
    cy.log(`Score Question`);
    cy.get('label[for="pontuacao_nao"]').click();
    
    // Selects 'AM' option for the State question 
    cy.log(`State Question`);
    cy.get('#cpf_estado').select('AM');

    // Function to generate CPF's
    function generatesCpfUntilStartsWith7() {
      // Clicks on button to generate a CPF number
      cy.get('#bt_gerar_cpf').click();
      
      // Gets the CPF number
      cy.wait(2000); //It was necessary to add this line of code to avoid to get the "Gerando..." text
      cy.get('#texto_cpf').invoke('text').then((cpf) => {
        cy.log(`Generated CPF number: ${cpf}`);
        console.log('Generated CPF number: ', cpf);

        // Verify if starts with 7
        if (!cpf.startsWith('7')) {
          cy.log('CPF number does not start whit 7, trying again...');
          generatesCpfUntilStartsWith7();
        } else {
          cy.log(`Valid CPF number found: ${cpf}`);
        }
      });
    }

    // Starts generation process
    generatesCpfUntilStartsWith7();
  });
});