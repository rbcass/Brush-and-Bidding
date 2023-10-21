from flask import Flask, jsonify, request
from flask_cors import CORS

app= Flask(__name__)


CORS(app)


#error help
@app.route('/')
def starter():
    return 'Working?'





@app.route('/submit', methods=['POST', 'GET'])
def submit_form():
    if request.method == "POST":

     data = request.get_json()
    
    return jsonify({'message': 'Form data received'})

if __name__ == '__main__':
    app.run(debug=True)