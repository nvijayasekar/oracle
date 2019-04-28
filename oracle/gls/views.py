from django.shortcuts import render
from django.http import HttpResponse


# Render Html Page by requesting (http://127.0.0.1:8000/).
def index(request):
	return render(request, 'index.html', {})