const fs = require("fs")
const data = require("../data.json")

exports.post = function(req, res) {
    const keys = Object.keys(req.body)
    let { name, date, avatar_url, escolaridade, aula, materia, sexo, id, created_at } = req.body

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send(`Não deixe nenhum campo vazio`)
        }
    }

    id = Number(data.teachers.length + 1)
    date = Date.parse(date)
    created_at = Date.now()
    data.teachers.push(
        { 
            id,
            name, 
            date,
            avatar_url, 
            escolaridade, 
            aula, 
            materia, 
            sexo,
            created_at
        }
    )
    

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) {
            return res.send("Houve um erro na escrita do arquivo json")
        }

        return res.redirect("/")
    })

}