from rest_framework.viewsets import ModelViewSet, ViewSet

from ..models.workshop import Workshop, WorkshopFaqs, WorkshopOrganiser, WorkshopPlan, WorkshopProject
from ..serializers.workshop import WorkshopSerializer, WorkshopFaqsSerializer, WorkshopOrganiserSerializer, WorkshopPlanSerializer, WorkshopProjectSerializer


class WorkshopView(ModelViewSet):
    serializer_class = WorkshopSerializer
    queryset = Workshop.objects.all()

class WorkshopFaqsView(ModelViewSet):
    serializer_class = WorkshopFaqsSerializer
    queryset = WorkshopFaqs.objects.all()

class WorkshopOrganiserView(ModelViewSet):
    serializer_class = WorkshopOrganiserSerializer
    queryset = WorkshopOrganiser.objects.all()

class WorkshopPlanView(ModelViewSet):
    serializer_class = WorkshopPlanSerializer
    queryset = WorkshopPlan.objects.all()

class WorkshopProjectView(ModelViewSet):
    serializer_class = WorkshopProjectSerializer
    queryset = WorkshopProject.objects.all()