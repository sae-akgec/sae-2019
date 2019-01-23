from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Workshop(models.Model):
    name = models.CharField(max_length=200, unique=True, null=False)
    venue = models.CharField(max_length=50, null=False)
    slug = models.CharField(max_length=20, unique=True, null=False)
    logo_url = models.CharField(max_length=200, null=False, default="https://")
    background_url = models.CharField(max_length=200, null=False, default="https://")
    description = models.TextField(null=False)
    short_description = models.CharField(max_length=400, null=False)
    reg_start_date = models.DateField(null=True)
    reg_end_date = models.DateField(null=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)
    reg_status = models.BooleanField(default=False)
    status = models.CharField(max_length=60, default = "Comming Soon..")
    wall_status = models.BooleanField(default=False)
    theme_color = models.CharField(max_length=10, default = "#84859d")
    video_link = models.CharField(max_length=200, null=False, default="https://")

    def __str__(self):
        return str(self.name)


class WorkshopProject(models.Model):
    name = models.CharField(max_length=200, unique=True, null=False)
    tech = models.CharField(max_length=200, unique=True, null=False)
    details = models.TextField(null=False)
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE, related_name='projects')
    img = models.CharField(max_length=200, null=False, default="https://")
    video_link = models.CharField(max_length=200, null=False, default="https://")

    def __str__(self):
        return str(self.name)


class WorkshopPlan(models.Model):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE, related_name='plans')
    team_limit = models.IntegerField(default=1)
    details = models.CharField(max_length=600, null=False)
    title = models.CharField(max_length = 50, null=False)
    price = models.IntegerField(default=1)

    def __str__(self):
        return str(self.workshop) +"  "+ str(self.title)


class WorkshopFaqs(models.Model):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE, related_name='faqs')
    question = models.CharField(max_length=200, null=False)
    answer = models.TextField(null=False)

    def __str__(self):
        return str(self.workshop) +"  Faq"

class WorkshopOrganiser(models.Model):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE, related_name='organisers')
    member = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.workshop)