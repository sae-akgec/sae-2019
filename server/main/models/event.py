from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Event(models.Model):
    name =  models.CharField(max_length=50, unique=True, null=False)
    description = models.TextField(null=False)
    date = models.DateField(null=True)
    status = models.CharField(max_length=60, default="Comming Soon..")
    logo_url = models.ImageField(null=True, upload_to = 'images/events/')
    background_url = models.ImageField(null=True, upload_to = 'images/events/')
    offical_link = models.CharField(max_length=200, null=False, default="https://")
    theme_color = models.CharField(max_length=10, default = "#84859d")
    short_description = models.CharField(max_length=400, null=False)
    video_link = models.CharField(max_length=200, null=False, default="https://")

    def __str__(self):
        return str(self.name)

class EventTimeline(models.Model):
    date = models.DateField(null=False)
    venue = models.CharField(max_length=50, null=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='timeline')
    achievement = models.CharField(max_length=200, null=False)

    def __str__(self):
        return str(self.event) + str(self.date)


class EventTeam(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='team')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.event) + " " + str(self.user)