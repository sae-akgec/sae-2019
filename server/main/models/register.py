from django.db import models, transaction
from django.contrib.auth import get_user_model
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.core.validators import RegexValidator
from django.utils import timezone

from .workshop import Workshop, WorkshopPlan

class WorkshopRegistrationManager(models.Manager):
    @transaction.atomic
    def do_registration(self, data, participants, send_email=True):
        """
        Create a new registration and its associated ``WorkshopParticipant``.
        Also, send mail to faculty.
        """
        
        # create instance of model
        m = WorkshopRegistration(**data)
        m.save()

        for participant in participants:
            participant['registration'] = m
            WorkshopParticipant.objects.create_participant(data=participant, send_email=False)

        if send_email:
            self.send_email(data, data.get('leader_email'))

        return m

    def send_email(self, data, email):
        """
        Sends an verification email to particpant.
        """
        subject = "Registration Mail"

        message = "Succesfully registerded"

        msg = EmailMultiAlternatives(subject, "", settings.DEFAULT_FROM_EMAIL, [email])
        msg.attach_alternative(message, "text/html")
        msg.send()

class WorkshopRegistration(models.Model):
    college_name = models.CharField(max_length=130, null=False)
    team_name = models.CharField(max_length=50, null=False)
    ref_code = models.CharField(max_length=20, default="no", null=True, blank=True)
    enroll_date = models.DateField(default=timezone.now, editable=False, null=True)
    is_team_local = models.BooleanField(default=True)
    enroll_status = models.BooleanField(default=False)
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    plan = models.ForeignKey(WorkshopPlan, on_delete=models.CASCADE)
    leader_email = models.EmailField(null=False)

    objects = WorkshopRegistrationManager()
    def __str__(self):
        return str(self.team_name + " - " + self.workshop)

class WorkshopParticipantManager(models.Manager):
    @transaction.atomic
    def create_participant(self, data, send_email=True):
        """
        Create a new participant.
        Also, send mail to each student with registration id.
        """
        
        # create instance of model
        m = WorkshopParticipant(**data)
        m.save()

        if send_email:
            self.send_email(data, data.get('email'))

        return m
    
    def send_email(self, data, email):
        """
        Sends an verification email to particpant.
        """
        subject = "Registration Mail"

        message = "Succesfully registerded"

        msg = EmailMultiAlternatives(subject, "", settings.DEFAULT_FROM_EMAIL, [email])
        msg.attach_alternative(message, "text/html")
        msg.send()

class WorkshopParticipant(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Others'),
    )
    
    YEAR_CHOICES = (
        (1, '1st'),
        (2, '2nd'),
        (3, '3rd'),
        (4, '4th')
    )

    name = models.CharField(max_length=50, null=False)
    university_roll = models.CharField(max_length=15, null=False)
    branch = models.CharField(max_length=50, null=False)
    year = models.IntegerField(default=0, null=False, choices=YEAR_CHOICES)
    gender = models.CharField(max_length=10, null=False, choices=GENDER_CHOICES)
    phn_no = models.CharField(null=False, max_length=10, validators=[RegexValidator(regex='^.{10}$', message='Length has to be 10', code='nomatch')])
    email = models.EmailField(null=False)
    registration = models.ForeignKey(WorkshopRegistration, on_delete=models.CASCADE, related_name="participants")


    objects = WorkshopParticipantManager()
    def __str__(self):
        return str(self.name + " - " + self.university_roll)