from rest_framework import permissions

class IsDepartmentAdmin(permissions.BasePermission):
    
    # Just doesn`t work with object! 
    # def has_object_permission(self, request, view):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            if request.method in ['GET', 'POST','PUT', 'DELETE']:  
                return request.user.is_staff 
        else:
            return False
        