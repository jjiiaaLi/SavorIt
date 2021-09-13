from flask import Blueprint, session
from app.forms.post_form import PostForm
from app.forms.basic_crud_form import CrudForm
from app.models import db
from app.models.crud import Crud


post_routes = Blueprint('posts', __name__)

@post_routes.route('/',methods=["GET"])
def get_post():
    

    return '',200

@post_routes.route('/', methods = ['GET'])
def get_crud():
    cruds = Crud.query.all()

    return {'Cruds':[crud.to_dict() for crud in cruds]}

@post_routes.route('/<int:id>', methods=['GET'])
def get_one_crud(id):
    crud = Crud.query.filter_by(id = id).first()

    return {"crud": crud.to_dict()}

@post_routes.route('/', methods=['POST'])
def create_crud():
    form = CrudForm()

    if form.validate_on_submit:

        crud_to_post = Crud(
            image = form.data['image'],
            comment = form.data['comment']
        )
        db.session.add(crud_to_post)
        db.session.commit()

    return "Submission successful",200

@post_routes.route('/<int:id>', methods = ['PUT'])
def edit_crud(id):
    form = CrudForm()

    if form.validate_on_submit:
        crud_to_edit = Crud.query.filter_by(id = id).first()

        image = form.data['image']
        comment = form.data['comment']

        crud_to_edit.image = image
        crud_to_edit.comment = comment

        db.session.commit()

    return 'database updated successfully',200


@post_routes.rout('/<int:id>', methods = ['DELETE'])
def delete_crud(id):


    return "",200