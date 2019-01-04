from rest_framework import serializers
from ..models.event import Event, EventTeam, EventTimeline

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class EventTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventTeam
        fields = '__all__'
        
class EventTimlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventTimeline
        fields = '__all__'