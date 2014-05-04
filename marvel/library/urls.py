from django.conf.urls import patterns, url, include
from rest_framework import routers
from library import views

router = routers.DefaultRouter()
router.register(r'genres', views.GenreViewSet)
router.register(r'authors', views.AuthorViewSet)
router.register(r'books', views.BookViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browseable API.
urlpatterns = patterns('',
                       url(r'^$', views.index, name='index'),
                       url(r'^', include(router.urls))
                       )
