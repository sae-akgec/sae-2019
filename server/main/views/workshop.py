from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly, AllowAny
from ..base.permissions import IsOwnerOrAdmin, IsSuperUser, IsOwnerOrStaff
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..models.workshop import Workshop, WorkshopFaqs, WorkshopOrganiser, WorkshopPlan, WorkshopProject
from ..serializers.workshop import (WorkshopSerializer, WorkshopFaqsSerializer, WorkshopOrganiserSerializer,
 WorkshopPlanSerializer, WorkshopProjectSerializer, WorkshopDetailSerializer)


class WorkshopView(ModelViewSet):
    serializer_class = WorkshopSerializer
    queryset = Workshop.objects.all()
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return WorkshopDetailSerializer
        return super(WorkshopView, self).get_serializer_class()

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'retrieve'):
            self.permission_classes = [ AllowAny, ]
        else:
            self.permission_classes = [IsSuperUser, IsAdminUser, ]

        return super(WorkshopView, self).get_permissions()

class WorkshopFaqsView(ModelViewSet):
    serializer_class = WorkshopFaqsSerializer
    queryset = WorkshopFaqs.objects.all()

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'retrieve'):
            self.permission_classes = [ AllowAny, ]
        else:
            self.permission_classes = [IsSuperUser, IsAdminUser, ]

        return super(WorkshopFaqsView, self).get_permissions()

class WorkshopOrganiserView(ModelViewSet):
    serializer_class = WorkshopOrganiserSerializer
    queryset = WorkshopOrganiser.objects.all()

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'retrieve'):
            self.permission_classes = [ AllowAny, ]
        else:
            self.permission_classes = [IsSuperUser, IsAdminUser, ]

        return super(WorkshopOrganiserView, self).get_permissions()

class WorkshopPlanView(ModelViewSet):
    serializer_class = WorkshopPlanSerializer
    queryset = WorkshopPlan.objects.all()

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'retrieve'):
            self.permission_classes = [ AllowAny, ]
        else:
            self.permission_classes = [IsSuperUser, IsAdminUser, ]

        return super(WorkshopPlanView, self).get_permissions()

class WorkshopProjectView(ModelViewSet):
    serializer_class = WorkshopProjectSerializer
    queryset = WorkshopProject.objects.all()

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'retrieve'):
            self.permission_classes = [ AllowAny, ]
        else:
            self.permission_classes = [IsSuperUser, IsAdminUser, ]

        return super(WorkshopProjectView, self).get_permissions()