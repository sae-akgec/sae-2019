from rest_framework import serializers
from ..models.register import WorkshopParticipant, WorkshopRegistration
from django.forms.models import model_to_dict
from rest_framework_recaptcha.fields import ReCaptchaField
from random import randint

class WorkshopParticipantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopParticipant
        fields = '__all__'

class WorkshopParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopParticipant
        exclude = ["registration"]

class WorkshopRegistrationSerializer(serializers.ModelSerializer):
    participants = WorkshopParticipantSerializer(many=True)
    recaptcha = ReCaptchaField(error_messages={
            "invalid-input-response": "reCAPTCHA token is invalid.",
            "idiot": "Don't try to hack (tum se na ho paayga",
        })
    class Meta:
        model = WorkshopRegistration
        fields = '__all__'

    def create(self, validated_data):

        registration_data = {
            'college_name': validated_data.get("college_name"),
            'team_name': validated_data.get("team_name") + str(randint(0,10000)),
            'ref_code': validated_data.get("ref_code", 'no'),
            'is_team_local': validated_data.get("is_team_local"),
            'enroll_status': False,
            'workshop': validated_data.get("workshop"),
            'plan': validated_data.get("plan"),
            'leader_email': validated_data.get("leader_email")
            }
        plan = validated_data.get("plan")
        dict_plan = model_to_dict( plan )
        participants = validated_data.get("participants")

        if not participants or len(participants) == 0:
            raise serializers.ValidationError("No Paticpants provided.")
        if len(participants) != dict_plan['team_limit']:
            raise serializers.ValidationError("Verify Number of Paticpants")

        WorkshopRegistration.objects.do_registration(registration_data, participants, True)
        
        return validated_data