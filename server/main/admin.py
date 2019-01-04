from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.db.models import ManyToOneRel, ForeignKey, OneToOneField


MySpecialAdmin = lambda model: type('SubClass'+model.__name__, (admin.ModelAdmin,), {
    'list_display': [x.name for x in model._meta.fields],
    'list_select_related': [x.name for x in model._meta.fields if isinstance(x, (ManyToOneRel, ForeignKey, OneToOneField,))]
})

from .models.accounts import UserProfile
from .models.workshop import Workshop, WorkshopFaqs, WorkshopPlan, WorkshopOrganiser, WorkshopProject
from .models.event import Event, EventTeam, EventTimeline


admin.site.register(Workshop)
admin.site.register(WorkshopProject)
admin.site.register(Event)
admin.site.register(EventTimeline)
admin.site.register(WorkshopOrganiser)
admin.site.register(WorkshopPlan)
admin.site.register(WorkshopFaqs)
admin.site.register(EventTeam)


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):

    list_display = ('id', 'name', 'email', 'is_active', 'has_email_verified')

    def email(self, profile):
        return profile.user.email

    def name(self, profile):
        return profile.user.first_name + " " + profile.user.last_name

    def is_active(self, profile):
        return profile.user.is_active
