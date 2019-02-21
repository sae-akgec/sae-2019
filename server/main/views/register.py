from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework import viewsets, mixins, serializers
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly, AllowAny
from ..base.permissions import IsOwnerOrAdmin, IsSuperUser, IsOwnerOrStaff
from django_filters.rest_framework import DjangoFilterBackend

from ..models.register import WorkshopRegistration, WorkshopParticipant, AacarRegistration
from ..serializers.register import WorkshopRegistrationSerializer, WorkshopParticipantSerializer, WorkshopParticipantRegistartionSerializer, AacarRegistrationSerializer

class WorkshopRegistrationView(ModelViewSet):
    queryset = WorkshopRegistration.objects.all()
    serializer_class = WorkshopRegistrationSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('team_name', 'workshop__id', 'enroll_status', 'college_name', 'plan__team_limit', 'is_team_local')

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'update', 'partial_update', 'destroy', 'retrieve'):
            self.permission_classes = [IsSuperUser, IsAdminUser, ]
        else:
            self.permission_classes = [AllowAny, ]

        return super(WorkshopRegistrationView, self).get_permissions()

class WorkshopParticipantView(ModelViewSet):
    queryset = WorkshopParticipant.objects.all()
    serializer_class = WorkshopParticipantSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('registration__team_name', 'registration__enroll_status', 'registration__is_team_local', 'registration__plan__team_limit')
    permission_classes = (IsAdminUser, IsSuperUser,)

    def get_serializer_class(self):
        if self.action == 'list':
            return WorkshopParticipantRegistartionSerializer
        return super(WorkshopParticipantView, self).get_serializer_class()

class AacarRegistrationView(ModelViewSet):
    queryset = AacarRegistration.objects.all()
    serializer_class = AacarRegistrationSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('enroll_status', 'gender', 'enroll_date', 'branch')

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'update', 'partial_update', 'destroy', 'retrieve'):
            self.permission_classes = [IsSuperUser, IsAdminUser, ]
        else:
            self.permission_classes = [AllowAny, ]

        return super(AacarRegistrationView, self).get_permissions()