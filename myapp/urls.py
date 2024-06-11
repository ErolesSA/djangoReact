from django.urls import path
from .views import ItemListCreate, ItemRetrieveUpdateDestroy

urlpatterns = [
    path('items/', ItemListCreate.as_view(), name='item-list-create'),
    path('items/<int:pk>/', ItemRetrieveUpdateDestroy.as_view(), name='item-retrieve-update-destroy'),
     # Rutas para las operaciones CRUD (CREATE, UPDATE, DELETE)
    path('items/<int:pk>/update/', ItemRetrieveUpdateDestroy.as_view(), name='item-update'),
    path('items/<int:pk>/delete/', ItemRetrieveUpdateDestroy.as_view(), name='item-delete'),
]
