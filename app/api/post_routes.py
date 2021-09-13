from flask import Blueprint, session
from app.forms.post_form import PostForm
from app.forms.basic_crud_form import CrudForm



post_routes = Blueprint('posts', __name__)

@post_routes.route('/',methods=["GET"])
def get_post():
    

    return '',200

@post_routes.route('/', methods = ['GET'])
def get_crud():


    return '',200

@post_routes.route('/', methods=['POST'])
def create_crud():


    return "",200

@post_routes.route('/<int:id>', methods = ['PUT'])
def edit_crud(id):


    return '',200


@post_routes.rout('/<int:id>', methods = ['DELETE'])
def delete_crud(id):


    return "",200