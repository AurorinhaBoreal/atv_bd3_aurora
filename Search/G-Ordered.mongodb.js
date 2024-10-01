const database = "BD3_ATV2"
const collection = "BD3_ATV2_PRODUTOS"

use(database)

db[collection].find()
    .sort({valor: 1})
    .limit(50)