from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector 
from mysql.connector import Error, errorcode
import pandas as pd

app= Flask(__name__)


CORS(app)


#error help
@app.route('/')
def starter():
    return 'Working?'


#connection python to sql
# try:
#    cnx = mysql.connector.connect(user="user01", password="password123",host="localhost",database="brushnbidding")
# except mysql.connector.Error as err:
#    if err.errno ==errorcode.ER_ACCESS_DENIED_ERROR:
#       print("Something is wrong with user details")
#    elif err.errno == errorcode.ER_BAD_DB_ERROR:
#       print("Database is nonexistant, sorry")
#    else:
#       print(err)
# else:
#    cnx.close()



#submit and insertion logic

@app.route('/submit', methods=['POST', 'GET'])
def submit_form():
    if request.method == "POST":
       formData = request.get_json()
       username = formData.get("username")
       password = formData.get("password")

       try:
            cnx = mysql.connector.connect(user="user01", password="password123", host="localhost", database="brushnbidding")
            cursor = cnx.cursor()

            
            insert_query = "INSERT INTO users (username, password) VALUES (%s, %s)"
            cursor.execute(insert_query, (username, password))

            cnx.commit()
            cursor.close()
            cnx.close()

            return jsonify({'message': 'Form data received and inserted into the database'})

       except mysql.connector.Error as err:
            if err.errno == mysql.connector.errorcode.ER_ACCESS_DENIED_ERROR:
                return jsonify({'error': 'Something is wrong with user details'})
            elif err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                return jsonify({'error': 'Database is nonexistent, sorry'})
            else:
                return jsonify({'error': str(err)})

       

     
    
    return jsonify({'message': 'Form data received'})

if __name__ == '__main__':
    app.run(debug=True)