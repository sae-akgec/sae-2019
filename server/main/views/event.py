from rest_framework.viewsets import ModelViewSet, ViewSet

from ..models.event import Event, EventTeam, EventTimeline
from ..serializers.event import EventSerializer, EventTeamSerializer, EventTimlineSerializer

class EventView(ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

class EventTeamView(ModelViewSet):
    serializer_class = EventTeamSerializer
    queryset = EventTeam.objects.all()

class EventTimelineView(ModelViewSet):
    serializer_class = EventTimlineSerializer
    queryset = EventTimeline.objects.all()
