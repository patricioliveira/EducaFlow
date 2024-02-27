from django.urls import path
from .views import ListaCursosCreateView, CursosDetailView, ListaAlunosCreateView, AlunoDetailView

urlpatterns = [
    path('cursos/', ListaCursosCreateView.as_view(), name='course-list-create'),
    path('cursos/<int:pk>/', CursosDetailView.as_view(), name='course-detail'),
    path('alunos/', ListaAlunosCreateView.as_view(), name='student-list-create'),
    path('alunos/<int:pk>/', AlunoDetailView.as_view(), name='student-detail'),
]
