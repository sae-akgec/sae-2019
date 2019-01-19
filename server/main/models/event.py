from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Event(models.Model):
    name =  models.CharField(max_length=50, unique=True, null=False)
    slug = models.CharField(max_length=20, unique=True, null=False)
    description = models.TextField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=60, default="Comming Soon..", null=True, blank=True)
    logo_url = models.ImageField(null=True, blank=True, upload_to = 'images/events/')
    background_url = models.ImageField(null=True, blank=True, upload_to = 'images/events/')
    offical_link = models.CharField(max_length=200, null=True, blank=True, default="https://")
    bg_color = models.CharField(max_length=50, default = "#84859d")
    bg_color_light = models.CharField(max_length=50, default = "#84859d")
    text_color_hover = models.CharField(max_length=50, default = "#84859d")
    box_shadow_color = models.CharField(max_length=50, default = "#84859d")
    video_link = models.CharField(max_length=200, null=True, blank=True, default="https://")

    def __str__(self):
        return str(self.name)

class EventTimeline(models.Model):
    date = models.DateField(null=False)
    venue = models.CharField(max_length=50, null=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='timeline')
    achievement = models.CharField(max_length=200, null=False)
    image = models.ImageField(null=True, blank=True, upload_to = 'images/events/')

    def __str__(self):
        return str(self.event) + str(self.date)


class EventTeam(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='team')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.event) + " " + str(self.user)