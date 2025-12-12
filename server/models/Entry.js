const db = require('../db/connect');

class Entry {
    constructor({
        entry_id, name, eventTimeStamp, category, country, description
    }){
        this.entry_id = entry_id;
        this.name = name;
        this.eventTimeStamp = eventTimeStamp;
        this.category = category;
        this.country = country;
        this.description = description;
    }

    static async getAll(){
        const response = await db.query('SELECT * FROM entry');
        if(response.rows.length === 0) {
            throw new Error('Please refresh the page and try again')
        }
        return response.rows.map(t => new Entry(t))
    }

    static async getOne(name) {
        const response = await db.query('SELECT * FROM entry WHERE LOWER(name) = LOWER($1);', [name])
     if(response.rows.length !== 1){
        throw new Error('Unable to find entry')
    }
    return new Entry(response.rows[0]);
}

    static async create(data) {
        const {name, eventTimeStamp, category, country, description} = data;
        const existingEntry = await db.query(
            'SELECT name FROM entry WHERE LOWER(name) = LOWER($1);',[name]
        );

        if(existingEntry.rows.length === 0) {
            let response = await db.query(
                'INSERT INTO entry(name, eventTimeStamp, category, country, description) VALUES ($1, $2, $3, $4, $5) RETURNING *;', [name, eventTimeStamp, category, country, description]
            );
            return new Entry(response.rows[0]);
        } else {
            throw new Error('Entry already exists')
        }
    }


    async destroy() {
        let response = await db.query(
            'DELETE FROM entry WHERE name = $1 RETURNING *;', [this.name]
        );
        return new Entry(response.rows[0])
    }


async update(data) {
        const response = await db.query("UPDATE entry SET name = $1, eventTimeStamp = $2, category = $3, country = $4, description = $5 WHERE name = $6 RETURNING*;",
            [ data.capital, this.name ]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update capital.")
        }
        return new Country(response.rows[0]);
    }

}
