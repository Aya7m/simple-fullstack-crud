import connection from "../../../DB/connection.js"

export const addPost = async (req, res) => {
    const { title, description, price } = req.body
    const query = `insert into posts(title,description,price) values('${title}','${description}',${price})`
    connection.execute(query, (err, result) => {
        if (err) {
          
            return res.status(400).json({ message: "query error", err })
        }
        if (!result.affectedRows) {
            return res.status(400).json({ message: "post fail to add" })
        }
        return res.status(200).json({ message: "post added successfully" })
    })
}


export const getAllPosts = async (req, res) => {
    const query = `select * from posts`
    connection.execute(query, (err, result) => {
        if (err) {
           
            return res.status(400).json({ message: "query error", err })
        }

        return res.status(200).json({ message: "success", data: result })
    })
}

export const updatePost = async (req, res) => {
    const { title, description, price, id } = req.body
    const query = `update posts set title="${title}",description="${description}",price="${price}" where id="${id}"`
    connection.execute(query, (err, result) => {
        if (err) {
         
            return res.status(400).json({ message: "query error", err })
        }
        if (!result.affectedRows) {
            return res.status(400).json({ message: "post fail to update" })
        }
        return res.status(200).json({ message: "post updated successfully" })
    })
}

export const deletePost = async (req, res) => {
    const { id } = req.body
    const query = `delete from posts where id="${id}"`
    connection.execute(query, (err, result) => {
        if (err) {
           
            return res.status(400).json({ message: "query error", err })
        }
        if (!result.affectedRows) {
            return res.status(400).json({ message: "post fail to delete" })
        }
        return res.status(200).json({ message: "post deleted successfully" })
    })
}