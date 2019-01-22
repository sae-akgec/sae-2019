from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework import viewsets, mixins, serializers
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly, AllowAny
from ..base.permissions import IsOwnerOrAdmin, IsSuperUser, IsOwnerOrStaff
from django_filters.rest_framework import DjangoFilterBackend

from ..models.register import WorkshopRegistration
from ..serializers.register import WorkshopRegistrationSerializer

class WorkshopRegistrationView(ModelViewSet):
    queryset = WorkshopRegistration.objects.all()
    serializer_class = WorkshopRegistrationSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('team_name', 'workshop__id', 'enroll_status', 'college_name', 'plan__id', 'is_team_local')

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'update', 'partial_update', 'destroy', 'retrieve'):
            self.permission_classes = [IsSuperUser, IsAdminUser, ]
        else:
            self.permission_classes = [AllowAny, ]

        return super(WorkshopRegistrationView, self).get_permissions()
