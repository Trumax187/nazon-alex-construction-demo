from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Later, we can pass dynamic data here (like project lists) instead of hardcoding in HTML
    return render_template('index.html')

if __name__ == '__main__':
    # host='0.0.0.0' allows you to view it on your phone over Wi-Fi
    app.run(host='0.0.0.0', port=5000, debug=True)