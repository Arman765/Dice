from flask import Flask,redirect,url_for,request,render_template

app = Flask(__name__)


@app.route('/reg')
def regpage():
    return render_template("reg.html")


@app.route('/',defaults = {'name':""})
@app.route('/<name>')
def gamepage(name):
    return render_template("game.html",name=name)


@app.route('/')
def mainpage():
    return render_template("index.html")

@app.route('/submit',methods= ['GET'])
def sub():
    if request.method == 'GET':
        p1N = request.args['p1N']
        p1U = request.args['p1U']
        p1S = request.args['p1S']
        p2N = request.args['p2N']
        p2U = request.args['p2U']
        p2S = request.args['p2S']
        
        return redirect(url_for('gamepage',name=p1N + p2N))    
    else:
        return redirect(url_for('gamepage')) 


if __name__ =='__main__':
    app.run(debug = True)
