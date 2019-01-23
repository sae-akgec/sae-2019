from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly, AllowAny
from ..base.permissions import IsOwnerOrAdmin, IsSuperUser, IsOwnerOrStaff
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView

from ..models.workshop import Workshop, WorkshopFaqs, WorkshopOrganiser, WorkshopPlan, WorkshopProject
from ..serializers.workshop import (WorkshopSerializer, WorkshopFaqsSerializer, WorkshopOrganiserSerializer,
 WorkshopPlanSerializer, WorkshopProjectSerializer, WorkshopDetailSerializer)

from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes, force_text
from django.template.loader import render_to_string

from rest_framework.response import Response
from rest_framework import status


class WorkshopView(ModelViewSet):
    serializer_class = WorkshopSerializer
    queryset = Workshop.objects.all()
    lookup_field = 'slug'

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

# Contact Email View 
class ContactUsAPIView(APIView):
    """
    docstring here
        :param APIView: 
    """
    permission_classes = (AllowAny,)
    def post(self, request):
        data = request.data
        full_name = data['full_name']
        email_address = data['email']
        phone_number = data['phone_number']
        description = data['description']
        
        mail_subject = data['subject']

        if full_name and email_address and phone_number and description and mail_subject:
            mail_message = render_to_string('contact_mail.html', {
                'full_name': full_name,
                'email_address': email_address,
                'phone_number': phone_number,
                'description':description,
            })
            to_email = "saeakgec.event@gmail.com"
            send_mail = EmailMessage(
                        mail_subject, mail_message, to=[to_email]
            )
            send_mail.send()
            return Response({"status":"Email Sent"}, status=status.HTTP_201_CREATED)
        return Response({"status":"Email Not Sent"}, status=status.HTTP_400_BAD_REQUEST)