-- Escreva uma query que exiba o maior salário da tabela.

SELECT MAX(SALARY) AS `max salary` FROM employees;

-- Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(SALARY) - MIN(SALARY) AS result FROM employees;

-- Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

SELECT
    JOB_ID,
    AVG(SALARY) AS average
FROM
    employees
GROUP BY
    JOB_ID
ORDER BY
    average DESC;

-- Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT SUM(SALARY) FROM employees;

-- Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT
    ROUND(MAX(SALARY), 2),
    ROUND(MIN(SALARY), 2),
    ROUND(SUM(SALARY), 2),
    ROUND(AVG(SALARY), 2)
FROM
    employees;

-- Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

SELECT
    COUNT(*) AS `IT_PROG employees`
FROM
    employees
WHERE
    JOB_ID = 'IT_PROG';

-- Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).

SELECT
    JOB_ID,
    SUM(SALARY) AS `salary_total`
FROM
    employees
GROUP BY
    JOB_ID;

-- Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).

SELECT
    JOB_ID,
    SUM(SALARY) AS `salary_total`
FROM
    employees
GROUP BY
    JOB_ID
HAVING
    JOB_ID = 'IT_PROG';

-- Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).

SELECT
    JOB_ID,
    AVG(SALARY) AS salary_average
FROM
    employees
GROUP BY
    JOB_ID
HAVING
    JOB_ID <> 'IT_PROG'
ORDER BY
    salary_average DESC;

-- Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários.Dica: agrupe pelo department_id .

SELECT
    DEPARTMENT_ID,
    AVG(SALARY) AS salary_average,
    COUNT(*) AS employees_total
FROM
    employees
GROUP BY
    DEPARTMENT_ID
HAVING
    employees_total > 10;

-- Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .

UPDATE
    employees
SET
    PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE
    PHONE_NUMBER LIKE '515%';

-- Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

SELECT * FROM employees WHERE LENGTH(FIRST_NAME) >= 8;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).

SELECT
    EMPLOYEE_ID,
    FIRST_NAME,
    YEAR(HIRE_DATE) AS hire_year
FROM
    employees;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT
    EMPLOYEE_ID,
    FIRST_NAME,
    DAY(HIRE_DATE) AS hire_day
FROM
    employees;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).

SELECT
    EMPLOYEE_ID,
    FIRST_NAME,
    MONTH(HIRE_DATE) AS hire_month
FROM
    employees;

-- Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT
    CONCAT(UCASE(FIRST_NAME), ' ', UCASE(LAST_NAME))
FROM
    employees;

-- Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT
    LAST_NAME,
    HIRE_DATE
FROM
    employees
WHERE
    MONTH(HIRE_DATE) = 7
    AND YEAR(HIRE_DATE) = 1987;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .

SELECT
    FIRST_NAME,
    LAST_NAME,
    DATEDIFF(CURRENT_DATE(), DATE(HIRE_DATE)) AS days_of_work
FROM
    employees;
