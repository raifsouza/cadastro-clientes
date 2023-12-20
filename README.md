Documentação do projeto
Projeto
Lista e cadastro de clientes
Descrição
Lista de cadastro de clientes é um aplicativo web desenvolvido em Angular que gerencia uma lista de clientes. Ele permite a exibição, criação e edição de clientes.
Configuração do Ambiente
Requisitos
•	Node.Js 18.13.0
•	Angular 16.2.12
Instalação
Realize o clone do repositório pelo link 
https://github.com/raifsouza/cadastro-clientes.git
Navegue até a pasta que clonou o repositório
Instale as dependências necessárias utilizando o comando 
	npm install
Execute o aplicativo utilizando o comando 
	ng serve
Estrutura do Projeto
•	src/app/components: Componentes do Angular (client-list, cadastro, etc.).
•	src/app/services: Serviços Angular (client.service).
•	src/assets: Recursos estáticos (imagens, ícones, etc.).


Uso
Client List:
•	Acesse http://localhost:4200/ para ver a lista de clientes.
•	Cada cliente exibe o nome, CNPJ, status e um botão de edição.
Cadastro:
•	Acesse http://localhost:4200/cadastro para adicionar um novo cliente.
•	Preencha os campos (nome, CNPJ, status) e clique em "Salvar".
Tecnologias Utilizadas
•	Angular
•	Angular CLI
Autor
Raif Rauda Pereira de Souza
