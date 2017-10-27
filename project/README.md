# Documentação

Documentação referente ao "Desafio estagiário: HTML/CSS/JS" o desafio proposto consiste numa **landing page** simulando um encurtador de links. 

### Instruções de uso

- Abra o arquivo "index.html" e altere o url (linha 16) para o de um servidor que você tenha permissão de acesso, caso não possivel utilize um servidor local (veja como em **Não tenho um servidor**);    
- Copie o arquivo "urls.json" e dentro do seu servidor crie uma pasta (Ex:projeto) e cole o arquivo json dentro do mesmo;
- Após Clonar/Baixar os arquivos e seguir os itens anteriores, basta abrir em seu navegador o arquivo index.html.

### Não tenho um servidor

- Baixe e Instale o WampServer (se sua plataforma for Linux utilixe o Xamp) http://www.wampserver.com/en/  ;
- após executalo, acesse-o a direita na barra de tarefas,vá em **Apache>Apache modules>headers_module**;
- Vá novamente em Apache>httpd-vhosts.conf e cole o seguinte cogigo:
<IfModule mod_headers.c>
	Header set Access-Control-Allow-Origin: *
</IfModule>
entre as tags <VirtualHost *:80>...</VirtualHost *:80> salve e feche;
- Reinicie o Wamp  em Restart All Services;
- Acesse o diretorio C:\wamp64\www e crie uma pasta chamada "projeto" e armazene seu .json dentro da pasta.

### O Projeto conta com

- Três aquivos sendo eles (.html,.css e .rm);
- A biblioteca jQuery (JavaScript);
- Layout Responsivo;
- Animação (encurtamento de link);
- Lleitura de arquivo .json;
- Comentarios indicativos moderados;


