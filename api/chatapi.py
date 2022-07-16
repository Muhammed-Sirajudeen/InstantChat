# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request
from flask_cors import CORS

# creating a Flask app
app = Flask(__name__)
app.run(host="0.0.0.0")
CORS(app)
chats=[]
# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/', methods = ['GET', 'POST'])
def home():
    if(request.method == 'GET'):

        data = "hello world"
        return jsonify({'data': data})
    if(request.method=='POST'):
        data=request.get_json()
        
        
        chats.append(data['chat'])
        print(chats)
        return {'chats':chats}


# A simple function to calculate the square of a number
# the number to be squared is sent in the URL when we use GET
# on the terminal type: curl http://127.0.0.1:5000 / home / 10
# this returns 100 (square of 10)



# driver function
if __name__ == '__main__':

    app.run(debug = False)
