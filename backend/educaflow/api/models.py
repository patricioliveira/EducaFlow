from django.core.exceptions import ValidationError
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from datetime import date

def validate_past_date(value):
    if value > date.today():
        raise ValidationError("A data não pode ser no futuro.")
class Curso(models.Model):
    ativo = models.BooleanField(default=True)
    nome_curso = models.CharField(max_length=100)
    nome_professor = models.CharField(max_length=100)
    descricao = models.TextField()

    def capitalize_full_name(self):
        words = self.nome_curso.split()
        capitalized_words = [word.capitalize() for word in words]
        self.nome_curso = ' '.join(capitalized_words)

    def capitalize_nome_professor(self):
        words = self.nome_professor.split()
        capitalized_words = [word.capitalize() for word in words]
        self.nome_professor = ' '.join(capitalized_words)

    def save(self, *args, **kwargs):
        self.capitalize_full_name()
        self.capitalize_nome_professor()
        super(Curso, self).save(*args, **kwargs)

    def __str__(self):
        return self.nome_curso

class Aluno(models.Model):
    GENDER_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Feminino'),
        ('O', 'Outros')
    ]

    ativo = models.BooleanField(default=True)
    nome = models.CharField(max_length=100)
    Cpf = models.BigIntegerField(
        validators=[
            MaxValueValidator(999999999999, "Apenas 11 dígitos permitidos para esse campo"),
        ],
        blank=False
    )
    data_nascimento = models.DateField(
        blank=False,
        validators=[
            MaxValueValidator(date.today(), "A data não pode ser no futuro."),
            validate_past_date
        ])
    genero = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=False)
    email = models.EmailField(unique=True)
    cursos = models.ManyToManyField(Curso)

    def capitalize_full_name(self):
        words = self.nome.split()
        capitalized_words = [word.capitalize() for word in words]
        self.nome = ' '.join(capitalized_words)

    def save(self, *args, **kwargs):
        self.capitalize_full_name()
        super(Aluno, self).save(*args, **kwargs)

    def __str__(self):
        return self.nome