### How to build login page using React and django GraphQL

#### Setting up Django GraphQL JWT
ref: https://django-graphql-jwt.domake.io/

#### Installation
Install and configure graphene 

Install version 0.3.4 of django-graphql-jwt
```shell
pip3 install django-graphql-jwt
```
#### Modify Django Settings file
Add AuthenticationMiddleware middleware to your MIDDLEWARE settings:
```python
MIDDLEWARE = [
    ...
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    ...
]
```
Add JSONWebTokenMiddleware middleware to your GRAPHENE settings:
```python
GRAPHENE = {
    "SCHEMA": "mysite.myschema.schema",
    "MIDDLEWARE": [
        "graphql_jwt.middleware.JSONWebTokenMiddleware",
    ],
}
```
Add JSONWebTokenBackend backend to your AUTHENTICATION_BACKENDS:
```python
AUTHENTICATION_BACKENDS = [
    "graphql_jwt.backends.JSONWebTokenBackend",
    "django.contrib.auth.backends.ModelBackend",
]
```
Authentication backends of django provide authenticate method for
user object. authenticate method of JSONWebTokenBackend is as
follows:
```python
def authenticate(self, request=None, **kwargs):
        if request is None or getattr(request, "_jwt_token_auth", False):
            return None

        token = get_credentials(request, **kwargs)

        if token is not None:
            return get_user_by_token(token, request)

        return None
```
Django-graphql-jwt uses a Graphene middleware to hook the authenticated 
user into context object. The simple, raw way to limit access to data is to check info.context.user.is_authenticated
Now in order to access protected API you must include the Authorization HTTP header:

POST / HTTP/1.1
Host: domake.io
Authorization: JWT <token>
Content-Type: application/json;




