from flask import request, jsonify
from . import app
from .models import db, User

@app.route('/api/users', methods=['POST'])
def create_user():
    # Logic to create a new user
    return jsonify({"message": "User created successfully"}), 201