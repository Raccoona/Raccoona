from django.contrib.auth.models import User, Group
from rest_framework import serializers
from models import Genre, Author, Book


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Group
        fields = ('url', 'name')


class GenreSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Genre
        fields = ('title', 'id')


class AuthorSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Author
        fields = ('first_name', 'middle_name', 'last_name', 'id')


class BookSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Book
        fields = ('title', 'authors', 'genre', 'description', 'id')
