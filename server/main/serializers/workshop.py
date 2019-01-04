from rest_framework import serializers
from ..models.workshop import Workshop, WorkshopFaqs, WorkshopOrganiser, WorkshopPlan, WorkshopProject

class WorkshopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workshop
        fields = '__all__'

class WorkshopFaqsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopFaqs
        fields = '__all__'

class WorkshopOrganiserSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopOrganiser
        fields = '__all__'

class WorkshopPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopPlan
        fields = '__all__'

class WorkshopProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopProject
        fields = '__all__'