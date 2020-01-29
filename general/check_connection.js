const Sequelize = require('sequelize')
const sequelize = new Sequelize('sequelize_tests','root','welcome12#',{
	dialect : 'mysql'
})

sequelize.authenticate()
	.then(() => console.log('we are connected'))
	.catch((error) => console.log(error))

