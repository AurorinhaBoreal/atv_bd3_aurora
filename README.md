# atv_bd3_aurora

Esse projeto tem como intuito fixarmos os conteúdos apresentados em aula relacionados a mongoDB, queries e operadores comparativos.

## Estrutura da Tabela 🗄️

| Campo       | Tipo         |
|-------------|--------------|
| codigo (pk) | int          |
| nome        | varchar(100) | 
| nome        | varchar(100) |
| valor       | int          |
| qtd         | int          |  
| fabricnate  | varchar(50)  | 
| categoria   | varchar(30)  | 
| descrição   | varchar(150) |
------------------------------

## Estrutura de Pastas 📂

```
--|
  |- Config -|
  |          |- createDatabase       # Cria o e a collection inicial
  |          |- populateDatabase     # Popula o banco com o .json
  |          |- dados                # Armazena os dados da loja
  |
  |- Search -|
             |- A-Costly             # Pesquisa pelo produto mais caro
             |- B-Cheaper            # Pesquisa pelo produto mais barato
             |- C-Range              # Pesquisa por produtos em uma faixa de preço
             |- D-Category           # Pesquisa por produtos de uma determinada categoria
             |- E-Categories         # Pesquisa por produtos de duas determinadas categorias
             |- F-Excluding          # Pesquisa os produtos excluindo os de duas categorias especificadas
             |- G-Ordered            # Pesquisa ordenando os produtos dos mais baratos para os mais caros
             |- H-Ordered            # Pesquisa ordenando os produtos dos mais caros para os mais baratos
             |- I-Ordered            # Pesquisa produtos de uma categoria especifica ordenandos dos mais baratos para os mais caros
             |- J-Ordered            # Pesquisa produtos excluindo uma categoria e ordenando a pesquisa dos mais caros para os mais baratos
```
