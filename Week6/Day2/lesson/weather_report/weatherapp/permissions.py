from rest_framework.permissions import BasePermission

class IsForecaster(BasePermission):
    
    def has_object_permission(self, request, view, obj):
        if request.method == 'DELETE':   
            return  request.user == object.forecaster # check if the current user is the author of the post
        if request.method in ['POST', 'GET', 'PUT']:   
            return True