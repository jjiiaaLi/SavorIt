from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Post


class PostForm(FlaskForm):
    
    userId = IntegerField('userId',[DataRequired()])
    location = StringField('location', [DataRequired()])
    itemName = StringField('itemName', [DataRequired()])
    comment = StringField('comment', [DataRequired()])
    image = StringField('image', [DataRequired()])

