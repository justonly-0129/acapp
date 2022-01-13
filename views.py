from django.http import HttpResponse

def index(request):
    line = '<h1 style="text-align: center">good night!!!</h1>'

    return HttpResponse(line)
