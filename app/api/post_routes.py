from flask import Blueprint, session
from app.forms.post_form import PostForm



post_routes = Blueprint('posts', __name__)

@post_routes.route('/')
def get_post():


    return '',200

