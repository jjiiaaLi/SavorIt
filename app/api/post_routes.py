from flask import Blueprint
from app.models import PostForm



post_routes = Blueprint('posts', __name__)

@post_routes.route('/')
def get_post():


    return '',200

