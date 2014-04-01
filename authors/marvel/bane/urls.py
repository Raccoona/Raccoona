from django.conf.urls import patterns, url

from bane import views

urlpatterns = patterns('',
                       url(r'^$', views.index, name='index')
                       )
