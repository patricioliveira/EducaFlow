from rest_framework import serializers
from .models import Curso, Aluno

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'

class AlunoSerializer(serializers.ModelSerializer):
    curso = CursoSerializer(many=True, read_only=True)

    class Meta:
        model = Aluno
        fields = '__all__'
