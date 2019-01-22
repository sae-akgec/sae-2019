from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly, AllowAny
from ..base.permissions import IsOwnerOrAdmin, IsSuperUser, IsOwnerOrStaff
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from ..models.event import Event, EventTeam, EventTimeline
from ..serializers.event import EventSerializer, EventTeamSerializer, EventTimlineSerializer, EventDetailSerializer

class EventView(ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    parser_classes = [MultiPartParser, FormParser, JSONParser]
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return EventDetailSerializer
        return super(EventView, self).get_serializer_class()

    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'retrieve'):
            self.permission_classes = [ AllowAny, ]
        else:
            self.permission_classes = [IsSuperUser, IsAdminUser, ]

        return super(EventView, self).get_permissions()

class EventTeamView(ModelViewSet):
    serializer_class = EventTeamSerializer
    queryset = EventTeam.objects.all()
    
    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'retrieve'):
            self.permission_classes = [ AllowAny, ]
        else:
            self.permission_classes = [IsSuperUser, IsAdminUser, ]

        return super(EventTeamView, self).get_permissions()

class EventTimelineView(ModelViewSet):
    serializer_class = EventTimlineSerializer
    queryset = EventTimeline.objects.all()
    
    def get_permissions(self):
        # Your logic should be all here
        if self.action in ('list', 'retrieve'):
            self.permission_classes = [ AllowAny, ]
        else:
            self.permission_classes = [IsSuperUser, IsAdminUser, ]

        return super(EventTimelineView, self).get_permissions()
