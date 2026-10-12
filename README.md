# Noct e a Fenda Carmesim

Vitrine oficial do livro de F. G. Santos: apresentação, sinopse, arte, autor e chamada para o Kindle.

## Estrutura

- `public/index.html`: única página pública.
- `public/assets/css/site.css`: estilos e adaptação para celular.
- `public/assets/js/config.js`: configuração do link de compra.
- `public/assets/js/navegacao.js`: navegação e progresso da página.
- `public/assets/js/kindle.js`: estado dos botões de compra.
- `public/assets/js/galeria.js`: ampliação das imagens e fechamento acessível.
- `public/assets/img/`: apenas imagens usadas na vitrine.

## Abrir e publicar

Abra `public/index.html` no navegador. Para hospedagem estática, configure **public** como diretório de publicação. Sem instalação ou build.

## Kindle

Preencha `kindleUrl` em `public/assets/js/config.js` com o endereço HTTPS da página do livro na Amazon. Os dois botões e avisos serão atualizados automaticamente. Sem endereço, permanecem no estado “Em breve no Kindle”.

## Imagens

A capa e a arte completa abrem em um visualizador. Feche pelo botão, pelo fundo ou por Esc. Sem JavaScript, os links abrem as imagens diretamente.

Repositório independente do jogo. O site não inclui leitor ou editor.
