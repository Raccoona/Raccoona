from django.conf.urls import patterns, url, include
from rest_framework import routers
from library import views

from django.contrib import admin
admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = patterns('',
                       url(r'^bane/', include('bane.urls')),
                       url(r'^library/', include('library.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^', include(router.urls)),
                       url(r'^api-auth/', include(
                           'rest_framework.urls', namespace='rest_framework'))
                       )
