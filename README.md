# API REST de Cadastro de Instrutores e Aulas

<p>Esta é uma API REST desenvolvida em JavaScript com Node.js para cadastrar e gerenciar instrutores e aulas. Ela utiliza o arquivo bancodedados.js 
para armazenar os dados de forma síncrona e possui rotas implementadas para os verbos POST, GET, PATCH e DELETE.</p>

<h3>Requisitos</h3>
<p>Certifique-se de ter o Node.js e o NPM instalados em sua máquina. Você pode verificar se o Node.js e o NPM estão instalados executando os seguintes comandos no terminal:</p>
<ul>
  <li>node -v</li>
  <li>npm -v</li>
</ul>
<p>Se não estiverem instalados, você pode baixá-los em nodejs.org (o NPM é instalado automaticamente com o Node.js).</p>

<h3>Instalação</h3>

<p>Clone este repositório em sua máquina.</p>
<p>Navegue até o diretório do projeto.</p>
<p>Instale as dependências, incluindo o framework Express, utilizando o NPM:</p>
<ul>
<li>npm install express</li>
</ul>

<P>Certifique-se de que o servidor está em execução. Você pode iniciar o servidor com o seguinte comando ou instalar o NODEMON para não precisar ficar startando a cada alteração no codigo.</P>

<p>A API estará disponível em http://localhost:3000. Pode utilizar o INSOMNIA ou outra interface de seu interesse para facilitar o acesso a API REST e testar as rotas.</p>

<p>O trecho do codigo do arquivo que contém as rotas que esta no arquivo rotas.js onde estão definidos os parametros de acesso e conexão com o controlador onde estão definidas as rotinas de cadatro, aatualização, exclução e validações.</p>

<p>Por questões acadêmicas não utilizei "destructuring" (desestruturação) nas definições das rotas.</p>

![image](https://github.com/joseweverton/Backend-API-REST-node.js/assets/125286733/fa62a074-3de0-44f1-82d3-a6eacfe5eb3f)

<p>Abaixo telas de exemplo de consulta, cadastro, alteração e exclusão de um instrutor:</p>

<p> - Listar Instrutores cadastrados:</p>

![image](https://github.com/joseweverton/Backend-API-REST-node.js/assets/125286733/e2ca7478-3486-44a2-be85-076bec1999d2)

<p> - Cadastrar novo Instrutor:</p>

![image](https://github.com/joseweverton/Backend-API-REST-node.js/assets/125286733/27776a15-9f1d-4d5d-b559-7e54faaa29ba)

<p> - Alterar Instrutor de ID 1:</p>

![image](https://github.com/joseweverton/Backend-API-REST-node.js/assets/125286733/0675732b-64ee-4b0e-aa0a-5f403e31b467)

<p> - Consultar Instrutor por ID:</p>

![image](https://github.com/joseweverton/Backend-API-REST-node.js/assets/125286733/3b16ed1f-0bb1-4d64-b67f-e87b15359cb2)

<p> - Excluir um Instrutor passando o ID:</p>

![image](https://github.com/joseweverton/Backend-API-REST-node.js/assets/125286733/abf8076b-f14a-4cb3-a268-ca39f233ed13)

<p> - As telas acima são exemplos da manipução dos objetos utilizando a interface INSOMNIA para manipular os dados. O arquivo raiz tem a implementações das aulas vinculadas aos intrutores que funcionam com a mesma lógica. Basta se basear pelas seguir conforme as rotas do arquivo rotas.js para implementa-las no Insominia para testar a aplicação.</p>

<h3>Contribuição</h3>

<p>Se desejar contribuir com este projeto, sinta-se à vontade para abrir um problema ou enviar uma solicitação de pull request.</p>

<h3>Licença</h3>

<p>Este projeto foi construido baseado em conteúdos acadêmicos em conjunto com a escola tecnologica Cubos Academy.</p>

<p>Espero que este README seja útil para servir de consulta e apoio para iniciantes. Boa sorte com o desenvolvimento da sua API!</p>



  


