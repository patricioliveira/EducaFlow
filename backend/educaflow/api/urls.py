from django.urls import path
from .views import ListaCursosCreateView, CursosDetailView, ListaAlunosCreateView, AlunoDetailView, CursosViewSet, AlunosViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'cursos', CursosViewSet)
router.register(r'alunos', AlunosViewSet)

urlpatterns = [
    path('cursos/', ListaCursosCreateView.as_view(), name='curso-list-create'),
    path('alunos/', ListaAlunosCreateView.as_view(), name='aluno-list-create'),
]

urlpatterns += router.urls