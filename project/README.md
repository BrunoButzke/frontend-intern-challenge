# Documentação

Documentação referente a "Desafio estagiário: HTML/CSS/JS" o desafio proposto consiste numa **landing page** simulando um encurtador de links. 

### Instruções de uso

- Abra o arquivo "index.html" e altere o url (linha 16) para o de um servidor que você tenha permissão de acesso, caso não seja possível utilize um servidor local (veja como em **Não tenho um servidor**);    
- Copie o arquivo "urls.json" em (./Assets/urls.json) e dentro de seu servidor crie uma pasta (Ex: projeto) e cole o arquivo .json dentro da mesma;
- Após Clonar/Baixar os arquivos e seguir os itens anteriores, basta abrir em seu navegador o arquivo index.html localizado em (./project/index.html);
- Você pode verificar se o .json esta sendo carregado adequadamente clicando com botão esquedo na tela, **Inspecionar>Console**, caso haja uma mensagem de erro consute o tópico **Erro Json**. 

### Não tenho um servidor

- Baixe e Instale o WampServer (se sua plataforma for Linux utilixe o Xamp) http://www.wampserver.com/en/  ;
- após executalo, acesse-o a direita na barra de tarefas, com o botão direito do mouse acesse **Tools>Test port 80**;
	- Se a resposta não for Apache, algum outro sistema esta usando a porta 80, clique em "Use a port other than 80" e digite 8080;
- acesse o wamp com botão direito,vá em **Apache>Apache modules>headers_module**;
- Vá novamente em **Apache>httpd-vhosts.conf** e cole o seguinte cogigo:
	-<"IfModule mod_headers.c> Header set Access-Control-Allow-Origin: * </IfModule">
    -entre as tags <VirtualHost *:80>...</VirtualHost *:80> salve e feche;
- Reinicie o Wamp  em Restart All Services;
- Acesse o diretorio C:\wamp64\www e crie uma pasta chamada "projeto" e armazene seu .json dentro da pasta;
- Lembre de alterar a url em "index.html" para ("http://localhost/projeto/urls.json") adicionando :8080 ao lado de "localhost" em caso de mudança da porta logica.

### Erro Json

- Caso você tenha um servidor ou tenha seguido os passos em **Não tenho um servidor** e um erro referente ao cabeçalho apareceu é necessario que ocorra uma mudança de portas logicas (ex: trocar para :8080);
- No WampServer basta acesssalo utilizando o botão esquerdo> Tools > Use a port other than 80, digite 8080 e confirme;
- Reinicie o WampServer;
- Não esqueça de dentro de "index.html" (na linha 16) adicionar a porta 8080 (ex: http://localhost:8080/projeto/urls.json).


### O Projeto conta com

- Três aquivos sendo eles (.html,.css e .rm);
- A biblioteca jQuery (JavaScript);
- Layout Responsivo;
- Animação (encurtamento de link);
- Lleitura de arquivo .json;
- Comentarios indicativos moderados;


