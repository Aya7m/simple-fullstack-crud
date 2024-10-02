import mysql from 'mysql2';
const connection = mysql.createConnection("mysql://ujvtbspievowzujk:Lv7yu8djwxyUsUidbAZB@bkogyfu2uqtmqbdrxknn-mysql.services.clever-cloud.com:3306/bkogyfu2uqtmqbdrxknn")


connection.connect((err) => {
    if (err) {
        console.log("error in database connection.",err);    
    } else {
        console.log('Connection established successfully');
    }
})


export default connection

