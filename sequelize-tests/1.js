'use strict'
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test_db', 'nextlab11', 'welcome123', {
	dialect : 'mysql'
})
const Op = Sequelize.Op

let Person = sequelize.define('person', {
	name : Sequelize.STRING,
	phone : {
		type : Sequelize.STRING,
		validate : {
			is : /^0{1}[0-9]{9}$/i
		}
	}
})

let main = async (req, res) => {
	try{
		// await sequelize.sync({force : true})
		// let p = {
		// 	name : 'andrei123',
		// 	phone : '0999000999'
		// }
		// await Person.create(p)
		// console.warn('saved')
		let results = await Person.findAll({where : {name : {[Op.regexp] : '^and.*$'}}}, {raw : true})
		console.warn(results)
	}
	catch(e){
		console.warn(e.stack)
	}
}

main()