from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

class HomeView(TemplateView):
    template_name = 'birdie/home.html'

class AdminView(TemplateView):
    template_name = 'birdie/admin.html'

    @method_decorator(login_required)
    #Overriding the parent classes dispatch function
    def dispatch(self, request, *args, **kwargs):
        return super(AdminView, self).dispatch(request, *args, **kwargs)
