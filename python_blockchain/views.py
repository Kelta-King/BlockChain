from django.shortcuts import render

# main page of website
def index_page(request):
    return render(request, 'index.html')