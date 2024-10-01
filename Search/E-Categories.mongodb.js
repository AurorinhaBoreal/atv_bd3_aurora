const database = "BD3_ATV2"

const collection = "BD3_ATV2_PRODUTOS"

use(database)

db[collection].find(
    { $or: [
        {categoria: "Tortas"}, 
        {categoria: "Bolos"}
    ]}
).sort({codigo: 1})