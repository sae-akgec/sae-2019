from django.conf.urls import re_path, include, url
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from rest_framework import permissions



from .views.accounts import (UserEmailVerificationAPIView, UserProfileAPIView, UserRegistrationAPIView, 
                           UserLoginView, PasswordResetAPIView, PasswordResetConfirmView, UpdateProfileAPIView)

from .views.event import EventView, EventTeamView, EventTimelineView
from .views.workshop import WorkshopFaqsView, WorkshopOrganiserView, WorkshopPlanView, WorkshopProjectView, WorkshopView

event_router = routers.DefaultRouter()
event_router.register(r'', EventView)

event_team_router = routers.DefaultRouter()
event_team_router.register(r'', EventTeamView)

event_timeline_router = routers.DefaultRouter()
event_timeline_router.register(r'', EventTimelineView)

workshop_router = routers.DefaultRouter()
workshop_router.register(r'', WorkshopView)

workshop_organiser_router = routers.DefaultRouter()
workshop_organiser_router.register(r'', WorkshopOrganiserView)

workshop_plan_router = routers.DefaultRouter()
workshop_plan_router.register(r'', WorkshopPlanView)

workshop_project_router = routers.DefaultRouter()
workshop_project_router.register(r'', WorkshopProjectView)

workshop_faqs_router = routers.DefaultRouter()
workshop_faqs_router.register(r'', WorkshopFaqsView)

urlpatterns = [
   url(r'^docs/', include_docs_urls(title="api-doc", public=True, permission_classes=[])),
   url(r'^auth/login/', UserLoginView.as_view(), name='login'),
   url(r'^auth/register/', UserRegistrationAPIView.as_view(), name='regsiter'),
   url(r'^auth/verify/(?P<verification_key>.+)/$', UserEmailVerificationAPIView.as_view(), name='email_verify'),
   url(r'^auth/password_reset/$', PasswordResetAPIView.as_view(), name='password_change'),
   url(r'^auth/reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
   url(r'^user/profile/$', UserProfileAPIView.as_view(), name='user_profile'),
   url(r'^user/profile/update$', UpdateProfileAPIView.as_view(), name='user_profile'),
   url(r'^events/', include(event_router.urls), name='events'),
   url(r'^event/teams/', include(event_team_router.urls), name='event_teams'),
   url(r'^event/timline/', include(event_timeline_router.urls), name='event_timeline'),
   url(r'^workshops/', include(workshop_router.urls), name='workshops'),
   url(r'^workshop/organisers/', include(workshop_organiser_router.urls), name='workshop_organisers'),
   url(r'^workshop/plans/', include(workshop_plan_router.urls), name='workshop_plans'),
   url(r'^workshop/projects/', include(workshop_project_router.urls), name='workshop'),
   url(r'^workshop/faqs/', include(workshop_faqs_router.urls), name='workshop'),
]