from .db import db

class Crud(db.Model):
    __tablename__ = 'cruds'

    id = db.Column(db.Integer, primary_key = True)
    image = db.Column(db.String(255), nullable = False)
    comment = db.Column(db.String(255), nullable = False)

    def to_dict(self):
        return{
            'id' : self.id,
            'image' : self.image,
            'comment' : self.comment
        }