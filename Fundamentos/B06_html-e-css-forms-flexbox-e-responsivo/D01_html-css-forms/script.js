// Cria as options com os estados do Brasil
function createStates() {
  // ref: https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5 - array de objetos de cada estado do Brasil
  const states = [
    { initials: 'AC', name: 'Acre' },
    { initials: 'AL', name: 'Alagoas' },
    { initials: 'AP', name: 'Amapá' },
    { initials: 'AM', name: 'Amazonas' },
    { initials: 'BA', name: 'Bahia' },
    { initials: 'CE', name: 'Ceará' },
    { initials: 'DF', name: 'Distrito Federal' },
    { initials: 'ES', name: 'Espírito Santo' },
    { initials: 'GO', name: 'Goiás' },
    { initials: 'MA', name: 'Maranhão' },
    { initials: 'MT', name: 'Mato Grosso' },
    { initials: 'MS', name: 'Mato Grosso do Sul' },
    { initials: 'MG', name: 'Minas Gerais' },
    { initials: 'PA', name: 'Pará' },
    { initials: 'PB', name: 'Paraíba' },
    { initials: 'PR', name: 'Paraná' },
    { initials: 'PE', name: 'Pernambuco' },
    { initials: 'PI', name: 'Piauí' },
    { initials: 'RJ', name: 'Rio de Janeiro' },
    { initials: 'RN', name: 'Rio Grande do Norte' },
    { initials: 'RS', name: 'Rio Grande do Sul' },
    { initials: 'RO', name: 'Rondônia' },
    { initials: 'RR', name: 'Roraima' },
    { initials: 'SC', name: 'Santa Catarina' },
    { initials: 'SP', name: 'São Paulo' },
    { initials: 'SE', name: 'Sergipe' },
    { initials: 'TO', name: 'Tocantins' },
  ];
  // Cria as options de estados do Brasil na tag select
  const statesList = document.getElementById('state');
  for (const state of states) {
    const option = document.createElement('option');
    option.value = state.initials;
    option.innerText = state.name;
    statesList.appendChild(option);
  }
}

// Checa se os valores inseridos de dia, mês e ano respeitam os limites reais
function dateNumbersCheck(array) {
  const dateObject = {
    day: array[0],
    month: array[1],
    year: array[2]
  };
  if ((dateObject.day <= 0 || dateObject.day > 31) || (dateObject.month <= 0 || dateObject.month > 12) || (dateObject.year <= 0)) {
    return 'Invalid date';
  } else {
    return `Start Date: ${dateObject.day}/${dateObject.month}/${dateObject.year}`;
  }
}
// Checa se a data está no formato dd/mm/yyyy
function dateFormatCheck() {
  const date = document.getElementById('start-date').value;
  if (date[2].match(/[/]/) && date[5].match(/[/]/)) {
    let dateItems = date.split('/');
    for (index = 0; index < dateItems; index += 1) {
      dateItems[index] = parseInt(dateItems[index], 10);
    }
    return dateNumbersCheck(dateItems);
  }
  return 'Invalid date';
}
// Checa se a quantidade de caracteres de inputs está dentro do limite
/**
 * Checa tamanho max
 * @param {l} element jjjjjjj
 * @param {number} size tamanho max
 * @returns boolean
 */
function maxLengthCheck(element, size) {
  const value = element.value;
  if (value.length > size) {
    return false;
  }
  return true;
}
// Define a input como obrigatória
function defineAsRequired(element) {
  element.required = true;
}

function nameCheck() {
  const name = document.getElementById('person-name');
  const size = 40;
  defineAsRequired(name);
  if (maxLengthCheck(name, size)) {
    return `Name: ${name.value}`;
  }
  return `Invalid name.`;
}

function emailCheck() {
  const email = document.getElementById('email-address');
  const size = 50;
  defineAsRequired(email);
  if (maxLengthCheck(email, size)) {
    return `Email: ${email.value}`;
  }
  return `Invalid email.`;
}

function cpfCheck() {
  const cpf = document.getElementById('person-cpf');
  const size = 11;
  defineAsRequired(cpf);
  if (maxLengthCheck(cpf, size)) {
    return `CPF: ${cpf.value}`;
  }
  return `Invalid CPF.`;
}

function addressCheck() {
  const address = document.getElementById('address');
  const size = 200;
  defineAsRequired(address);
  if (maxLengthCheck(address, size)) {
    return `Address: ${address.value}`;
  }
  return `Invalid address.`;
}

function townCheck() {
  const town = document.getElementById('town');
  const size = 28;
  defineAsRequired(town);
  if (maxLengthCheck(town, size)) {
    return `Town: ${town.value}`;
  }
  return 'Invalid town.';
}

function stateCheck() {
  const state = document.getElementById('state');
  defineAsRequired(state);
  return `State: ${state.value}`;
}
/*
function houseTypeCheck() {
  const houseType = document.getElementById('house-type');
  defineAsRequired(houseType);
  return `House Type: ${houseType.value}`;
}
*/
function abstractCheck() {
  const abstract = document.getElementById('curriculum-abstract');
  const size = 1000;
  defineAsRequired(abstract);
  if (maxLengthCheck(abstract, size)) {
    return `Abstract: ${abstract.value}`;
  }
  return `Invalid abstract.`;
}

function descriptionCheck() {
  const description = document.getElementById('job-description');
  const size = 500;
  defineAsRequired(description);
  if (maxLengthCheck(description, size)) {
    return `Job Description: ${description.value}`;
  }
  return `Invalid Job Description.`;
}

function jobTitleCheck() {
  const jobTitle = document.getElementById('job-title');
  const size = 1000;
  defineAsRequired(jobTitle);
  if (maxLengthCheck(jobTitle, size)) {
    return `Job Title: ${jobTitle.value}`;
  }
  return `Invalid Job Title.`;
}

window.onload = () => {
  createStates();
  // Seleciona div com os resultados do form
  const divResults = document.getElementById('results');
  // Cria botão que submete o formulário
  const submitButton = document.getElementById('submit-button');
  // Adiciona listener ao botão de submissão pra quando eu for clicado
  submitButton.addEventListener('click', (event) => {
    if (divResults.children.length !== 0) {
      while (divResults.firstChild) {
        divResults.removeChild(divResults.firstChild);
      }
    }
    event.preventDefault(); // Faz com que o botão de submissão não tenha seu comportamento padrão no evento de click
    const results = [nameCheck(), dateFormatCheck(), emailCheck(), cpfCheck(), addressCheck(), townCheck(), stateCheck(), abstractCheck(), descriptionCheck(), jobTitleCheck()];

    for (let index = 0; index < results.length; index += 1) {
      const div = document.createElement('div');
      div.innerText = results[index];
      divResults.appendChild(div);
    }
  });
};
