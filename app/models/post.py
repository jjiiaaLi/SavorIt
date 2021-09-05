from .db import db


class Post(db.Model):
    __tablename__= 'posts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    location = db.Column(db.String(80), nullable=False)
    itemName = db.Column(db.String(200), nullable=False)
    comment = db.Column(db.String(500))
    image = db.Column(db.String(100))

    users = db.relationship('User', back_populates='posts')

    def to_dict(self):
        return {
            'id':self.id,
            'userId':self.userId,
            'location':self.location,
            'itemName':self.itemName,
            'comment':self.comment,
            'image':self.image
        }