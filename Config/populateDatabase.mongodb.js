const database = "BD3_ATV2"

const collection = "BD3_ATV2_PRODUTOS"

use(database)

db[collection].insertMany(
        [
        {
        "codigo": 1,
        "nome": "Brigadeiro Gourmet",
        "valor": 3,
        "qtd": 100,
        "fabricante": "Doce Delícia",
        "categoria": "Doces",
        "descricao": "Brigadeiro gourmet feito com chocolate belga."
        },
        {
        "codigo": 2,
        "nome": "Coxinha de Morango",
        "valor": 5,
        "qtd": 50,
        "fabricante": "Fábrica de Doces",
        "categoria": "Doces",
        "descricao": "Deliciosa coxinha recheada com morango e brigadeiro."
        },
        {
        "codigo": 3,
        "nome": "Pudim de Leite",
        "valor": 20,
        "qtd": 15,
        "fabricante": "Doces Caseiros",
        "categoria": "Sobremesas",
        "descricao": "Pudim de leite condensado tradicional e cremoso."
        },
        {
        "codigo": 4,
        "nome": "Bolo de Cenoura com Cobertura de Chocolate",
        "valor": 25,
        "qtd": 10,
        "fabricante": "Bolos & Sabores",
        "categoria": "Bolos",
        "descricao": "Bolo de cenoura fofinho com cobertura de chocolate."
        },
        {
        "codigo": 5,
        "nome": "Beijinho de Coco",
        "valor": 2,
        "qtd": 120,
        "fabricante": "Doces & Companhia",
        "categoria": "Doces",
        "descricao": "Beijinho feito com coco fresco e leite condensado."
        },
        {
        "codigo": 6,
        "nome": "Torta de Limão",
        "valor": 30,
        "qtd": 8,
        "fabricante": "Delícias da Vovó",
        "categoria": "Tortas",
        "descricao": "Torta de limão com cobertura de merengue e base crocante."
        },
        {
        "codigo": 7,
        "nome": "Cupcake de Baunilha com Ganache",
        "valor": 7,
        "qtd": 60,
        "fabricante": "Sweet Cupcakes",
        "categoria": "Doces",
        "descricao": "Cupcake de baunilha com recheio de ganache de chocolate."
        },
        {
        "codigo": 8,
        "nome": "Quindim",
        "valor": 4,
        "qtd": 40,
        "fabricante": "Delícias Brasileiras",
        "categoria": "Doces",
        "descricao": "Quindim tradicional de coco, brilhante e saboroso."
        },
        {
        "codigo": 9,
        "nome": "Cheesecake de Frutas Vermelhas",
        "valor": 35,
        "qtd": 6,
        "fabricante": "Doceria Fina",
        "categoria": "Sobremesas",
        "descricao": "Cheesecake cremoso com cobertura de frutas vermelhas."
        },
        {
        "codigo": 10,
        "nome": "Brownie de Chocolate",
        "valor": 6,
        "qtd": 30,
        "fabricante": "Chocolate Bakery",
        "categoria": "Doces",
        "descricao": "Brownie de chocolate amargo com pedaços de nozes."
        },
        {
        "codigo": 11,
        "nome": "Churros Recheado com Doce de Leite",
        "valor": 8,
        "qtd": 45,
        "fabricante": "Churros & Companhia",
        "categoria": "Doces",
        "descricao": "Churros crocante recheado com doce de leite."
        },
        {
        "codigo": 12,
        "nome": "Trufa de Maracujá",
        "valor": 5,
        "qtd": 70,
        "fabricante": "Trufas Gourmet",
        "categoria": "Doces",
        "descricao": "Trufa recheada com creme de maracujá e chocolate branco."
        },
        {
        "codigo": 13,
        "nome": "Bolo de Fubá com Goiabada",
        "valor": 20,
        "qtd": 12,
        "fabricante": "Bolos & Sabores",
        "categoria": "Bolos",
        "descricao": "Bolo de fubá com pedacinhos de goiabada."
        },
        {
        "codigo": 14,
        "nome": "Torta Holandesa",
        "valor": 40,
        "qtd": 8,
        "fabricante": "Doceria Fina",
        "categoria": "Tortas",
        "descricao": "Torta holandesa com creme de baunilha e cobertura de chocolate."
        },
        {
        "codigo": 15,
        "nome": "Sonho Recheado com Creme",
        "valor": 5,
        "qtd": 50,
        "fabricante": "Padaria Doce Sabor",
        "categoria": "Doces",
        "descricao": "Sonho macio e recheado com creme de confeiteiro."
        },
        {
        "codigo": 16,
        "nome": "Torta de Morango",
        "valor": 35,
        "qtd": 10,
        "fabricante": "Delícias da Vovó",
        "categoria": "Tortas",
        "descricao": "Torta de morango fresca com creme e cobertura de geleia."
        },
        {
        "codigo": 17,
        "nome": "Palha Italiana",
        "valor": 4,
        "qtd": 100,
        "fabricante": "Doce Delícia",
        "categoria": "Doces",
        "descricao": "Palha italiana feita com brigadeiro e biscoito."
        },
        {
        "codigo": 18,
        "nome": "Bem-Casado",
        "valor": 3,
        "qtd": 80,
        "fabricante": "Fábrica de Doces",
        "categoria": "Doces",
        "descricao": "Tradicional bem-casado com recheio de doce de leite."
        },
        {
        "codigo": 19,
        "nome": "Bolo de Chocolate com Recheio de Nutella",
        "valor": 50,
        "qtd": 5,
        "fabricante": "Bolos & Sabores",
        "categoria": "Bolos",
        "descricao": "Bolo de chocolate recheado com Nutella e cobertura cremosa."
        },
        {
        "codigo": 20,
        "nome": "Pé de Moleque",
        "valor": 3,
        "qtd": 120,
        "fabricante": "Doces Caseiros",
        "categoria": "Doces",
        "descricao": "Pé de moleque crocante com amendoim caramelizado."
        },
        {
        "codigo": 21,
        "nome": "Rocambole de Doce de Leite",
        "valor": 30,
        "qtd": 10,
        "fabricante": "Doceria Fina",
        "categoria": "Sobremesas",
        "descricao": "Rocambole macio recheado com doce de leite."
        },
        {
        "codigo": 22,
        "nome": "Trufa de Chocolate com Avelã",
        "valor": 5,
        "qtd": 60,
        "fabricante": "Trufas Gourmet",
        "categoria": "Doces",
        "descricao": "Trufa recheada com creme de avelã e chocolate."
        },
        {
        "codigo": 23,
        "nome": "Bomba de Chocolate",
        "valor": 7,
        "qtd": 40,
        "fabricante": "Delícias da Vovó",
        "categoria": "Doces",
        "descricao": "Bomba recheada com creme e cobertura de chocolate."
        },
        {
        "codigo": 24,
        "nome": "Torta de Maçã",
        "valor": 28,
        "qtd": 6,
        "fabricante": "Delícias da Vovó",
        "categoria": "Tortas",
        "descricao": "Torta de maçã com massa crocante e recheio doce."
        },
        {
        "codigo": 25,
        "nome": "Macaron de Framboesa",
        "valor": 6,
        "qtd": 50,
        "fabricante": "Doceria Fina",
        "categoria": "Doces",
        "descricao": "Macaron delicado com recheio de framboesa."
        },
        {
        "codigo": 26,
        "nome": "Brigadeiro de Leite Ninho",
        "valor": 3,
        "qtd": 100,
        "fabricante": "Doce Delícia",
        "categoria": "Doces",
        "descricao": "Brigadeiro gourmet feito com leite Ninho."
        },
        {
        "codigo": 27,
        "nome": "Bolo Red Velvet",
        "valor": 45,
        "qtd": 5,
        "fabricante": "Bolos & Sabores",
        "categoria": "Bolos",
        "descricao": "Bolo Red Velvet com cream cheese."
        },
        {
        "codigo": 28,
        "nome": "Biscoito Amanteigado",
        "valor": 12,
        "qtd": 40,
        "fabricante": "Doceria Fina",
        "categoria": "Doces",
        "descricao": "Biscoito amanteigado crocante e saboroso."
        },
        {
        "codigo": 29,
        "nome": "Mini Churros com Doce de Leite",
        "valor": 10,
        "qtd": 60,
        "fabricante": "Churros & Companhia",
        "categoria": "Doces",
        "descricao": "Mini churros recheados com doce de leite."
        },
        {
        "codigo": 30,
        "nome": "Torta de Chocolate e Nozes",
        "valor": 38,
        "qtd": 7,
        "fabricante": "Delícias da Vovó",
        "categoria": "Tortas",
        "descricao": "Torta de chocolate com recheio de nozes."
        },
        {
        "codigo": 31,
        "nome": "Trufa de Laranja",
        "valor": 5,
        "qtd": 55,
        "fabricante": "Trufas Gourmet",
        "categoria": "Doces",
        "descricao": "Trufa recheada com creme de laranja e chocolate ao leite."
        },
        {
        "codigo": 32,
        "nome": "Bolo de Milho",
        "valor": 22,
        "qtd": 15,
        "fabricante": "Bolos & Sabores",
        "categoria": "Bolos",
        "descricao": "Bolo de milho tradicional, macio e saboroso."
        },
        {
        "codigo": 33,
        "nome": "Torta de Amendoim",
        "valor": 35,
        "qtd": 8,
        "fabricante": "Delícias da Vovó",
        "categoria": "Tortas",
        "descricao": "Torta cremosa de amendoim com cobertura crocante."
        },
        {
        "codigo": 34,
        "nome": "Mini Bolo de Cenoura",
        "valor": 10,
        "qtd": 30,
        "fabricante": "Bolos & Sabores",
        "categoria": "Doces",
        "descricao": "Mini bolo de cenoura com calda de chocolate."
        },
        {
        "codigo": 35,
        "nome": "Pão de Mel Recheado",
        "valor": 6,
        "qtd": 80,
        "fabricante": "Doces & Companhia",
        "categoria": "Doces",
        "descricao": "Pão de mel recheado com doce de leite."
        },
        {
        "codigo": 36,
        "nome": "Torta de Maracujá",
        "valor": 32,
        "qtd": 9,
        "fabricante": "Doceria Fina",
        "categoria": "Tortas",
        "descricao": "Torta de maracujá com base crocante e creme suave."
        },
        {
        "codigo": 37,
        "nome": "Brigadeiro de Pistache",
        "valor": 4,
        "qtd": 70,
        "fabricante": "Doce Delícia",
        "categoria": "Doces",
        "descricao": "Brigadeiro gourmet feito com pistache."
        },
        {
        "codigo": 38,
        "nome": "Torta de Coco",
        "valor": 30,
        "qtd": 8,
        "fabricante": "Delícias da Vovó",
        "categoria": "Tortas",
        "descricao": "Torta de coco cremosa com base crocante."
        },
        {
        "codigo": 39,
        "nome": "Biscoito de Polvilho",
        "valor": 7,
        "qtd": 100,
        "fabricante": "Fábrica de Doces",
        "categoria": "Doces",
        "descricao": "Biscoito de polvilho crocante e leve."
        },
        {
        "codigo": 40,
        "nome": "Bolo de Banana com Canela",
        "valor": 22,
        "qtd": 12,
        "fabricante": "Bolos & Sabores",
        "categoria": "Bolos",
        "descricao": "Bolo de banana com canela e cobertura açucarada."
        },
        {
        "codigo": 41,
        "nome": "Bombom de Uva",
        "valor": 3,
        "qtd": 90,
        "fabricante": "Doce Delícia",
        "categoria": "Doces",
        "descricao": "Bombom recheado com uva e chocolate ao leite."
        },
        {
        "codigo": 42,
        "nome": "Bolo Prestígio",
        "valor": 48,
        "qtd": 6,
        "fabricante": "Bolos & Sabores",
        "categoria": "Bolos",
        "descricao": "Bolo de chocolate com recheio de coco."
        },
        {
        "codigo": 43,
        "nome": "Torta de Nozes",
        "valor": 42,
        "qtd": 5,
        "fabricante": "Delícias da Vovó",
        "categoria": "Tortas",
        "descricao": "Torta de nozes com massa leve e recheio cremoso."
        },
        {
        "codigo": 44,
        "nome": "Biscoito Recheado com Doce de Leite",
        "valor": 15,
        "qtd": 25,
        "fabricante": "Doceria Fina",
        "categoria": "Doces",
        "descricao": "Biscoitos crocantes recheados com doce de leite."
        },
        {
        "codigo": 45,
        "nome": "Pavê de Chocolate",
        "valor": 36,
        "qtd": 7,
        "fabricante": "Delícias da Vovó",
        "categoria": "Sobremesas",
        "descricao": "Pavê de chocolate com camadas de biscoito e creme."
        },
        {
        "codigo": 46,
        "nome": "Bolo de Laranja",
        "valor": 20,
        "qtd": 10,
        "fabricante": "Bolos & Sabores",
        "categoria": "Bolos",
        "descricao": "Bolo de laranja fofinho com cobertura açucarada."
        },
        {
        "codigo": 47,
        "nome": "Doce de Abóbora com Coco",
        "valor": 5,
        "qtd": 70,
        "fabricante": "Doces Caseiros",
        "categoria": "Doces",
        "descricao": "Doce caseiro de abóbora com coco fresco."
        },
        {
        "codigo": 48,
        "nome": "Rabanada Tradicional",
        "valor": 6,
        "qtd": 35,
        "fabricante": "Padaria Doce Sabor",
        "categoria": "Doces",
        "descricao": "Rabanada tradicional com açúcar e canela."
        },
        {
        "codigo": 49,
        "nome": "Bala de Coco",
        "valor": 4,
        "qtd": 120,
        "fabricante": "Fábrica de Doces",
        "categoria": "Doces",
        "descricao": "Bala de coco artesanal e crocante."
        },
        {
        "codigo": 50,
        "nome": "Torta Mousse de Chocolate",
        "valor": 40,
        "qtd": 6,
        "fabricante": "Doceria Fina",
        "categoria": "Tortas",
        "descricao": "Torta mousse de chocolate cremosa e intensa."
        }
        ]
)