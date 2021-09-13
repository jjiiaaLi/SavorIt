from flask_wtf import FlaskForm
from wtforms import IntegerField,  StringField
from wtforms.validators import DataRequired

class CrudForm(FlaskForm):

    userId = IntegerField('userId',[DataRequired()] )
    image = StringField('image', [DataRequired()])
    comment = StringField('comment', [DataRequired()])
    