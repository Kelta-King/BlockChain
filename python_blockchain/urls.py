
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from blockchain import views
from blockchain.views import *
from . import views as home_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view.index_page, name='main page'),
    path('get_chain', views.get_chain, name="get_chain"),
    path('mine_block', views.mine_block, name="mine_block"),
    path('add_transaction', views.add_transaction, name="add_transaction"), 
    path('is_valid', views.is_valid, name="is_valid"), 
    path('connect_node', views.connect_node, name="connect_node"), 
    path('replace_chain', views.replace_chain, name="replace_chain"), 
]