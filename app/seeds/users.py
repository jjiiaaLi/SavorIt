from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demoshop = User(username='Boba Haven', email='demoshop@email.io',
                password='password')

    db.session.add(demoshop)

    db.session.commit()



    democustomer = User(username='Tom1999', email='demoCustomer@email.io', password = 'password')
    db.session.add(democustomer)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
