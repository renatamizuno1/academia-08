from django.shortcuts import render

# Create your views here.
def home(request):
    nome = 'Mizuno'
    idade = 5
    lista_roupas = {
        'saias',
        'vestidos',
        'camisetas',
        'calças',
        'cinto',
        'boné',
    }

    context = {
        'roupas': lista_roupas,
        'nome': nome,
        'idade': idade
    }
    return render(request, 'home.html', context)