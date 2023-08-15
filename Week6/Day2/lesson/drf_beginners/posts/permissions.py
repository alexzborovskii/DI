from rest_framework import permissions

class IsAuthenticatedAndAdmin(permissions.BasePermission):
    
    def has_permission(self, request, view): # who is the user
        if request.method in ['GET', "POST"]:
            return request.user.is_authenticated # true - has permission
        
        # elif request.method in ['POST', 'PUT', 'DELETE']:
        #     if request.user.is_authenticated:
        #         return request.user.is_staff # true if user is administrator
    
    
    def has_object_permission(self, request, view, obj):
        if request.method in ['PUT', 'DELETE']:   
            return object.author == request.user # check if the current user is the author of the post
        return True
        
        
        
    # has_permission - all about checking who is the user (logged in/admin etc)
    # has_object_permission = all about the object (who can and who cannot access)
    
    