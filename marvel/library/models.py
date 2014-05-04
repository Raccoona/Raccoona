from django.db import models

# Create your models here.


class Genre(models.Model):
    title = models.CharField(max_length=30)


class Author(models.Model):
    first_name = models.CharField(max_length=30)
    middle_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)


class Book(models.Model):
    genre = models.ForeignKey(Genre)
    authors = models.ManyToManyField(Author)
    title = models.CharField(max_length=250)
    description = models.TextField()
