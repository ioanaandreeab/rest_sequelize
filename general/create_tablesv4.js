const Sequelize = require('sequelize')

const sequelize = new Sequelize('sequelize_tests','root','welcome12#',{
	dialect : 'mysql',
	define : {
		timestamps : false
	}
})

const Book = sequelize.import('./book')

sequelize.sync({force : true})
	.then(() => console.log('created'))
	.catch((error) => console.log(error))