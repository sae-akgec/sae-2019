# Generated by Django 2.1.4 on 2019-01-04 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='fb_link',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='li_link',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
