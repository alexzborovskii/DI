from rest_framework import permissions

class IsDepartmentAdmin(permissions.BasePermission):
    
    def has_permission(self, request, view):
        if request.user.is_authenticated and request.method in ['GET', 'POST','PUT', 'DELETE']:  
            return request.user.is_staff 
        else:
            return False
        
    def has_object_permission(self, request, view, obj):
        return request.user == obj.administrator