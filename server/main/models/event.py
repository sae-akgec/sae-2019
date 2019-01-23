from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Event(models.Model):
    COLOR_CHOICES = (
        ('color-yellow', 'color-yellow'),
        ('color-blue', 'color-blue'),
        ('color-voilet', 'color-voilet'),
        ('color-grey', 'color-grey'),
    )
    name =  models.CharField(max_length=50, unique=True, null=False)
    slug = models.CharField(max_length=20, unique=True, null=False)
    description = models.TextField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=60, default="Comming Soon..", null=True, blank=True)
    logo_url = models.CharField(max_length=200, null=False, default="https://")
    background_url =models.CharField(max_length=200, null=False, default="https://")
    offical_link = models.CharField(max_length=200, null=True, blank=True, default="https://")
    color_class = models.CharField(max_length=10, null=False, choices=COLOR_CHOICES, default='color-yellow')
    video_link = models.CharField(max_length=200, null=True, blank=True, default="https://")

    def __str__(self):
        return str(self.name)

class EventTimeline(models.Model):
    date = models.DateField(null=False)
    venue = models.CharField(max_length=50, null=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='timeline')
    achievement = models.CharField(max_length=200, null=False)
    image = models.CharField(max_length=200, null=False, default="https://")

    def __str__(self):
        return str(self.event) + str(self.date)


class EventTeam(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='team')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.event) + " " + str(self.user)