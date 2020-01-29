const Sequelize = require('sequelize')
const sequelize = new Sequelize('sequelize_tests','root','welcome12#',{
	dialect : 'mysql'
})

const Author = sequelize.define('author', {
	name : Sequelize.STRING,
	email : Sequelize.STRING
})

const Message = sequelize.define('message', {
	title : Sequelize.STRING,
	content : Sequelize.STRING
})

sequelize.sync()
	.then(() => console.log('created'))
	.catch((error) => console.log(error))
