# Generated by Django 2.1.5 on 2019-01-15 19:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_auto_20190115_2229'),
    ]

    operations = [
        migrations.RenameField(
            model_name='workshoporganiser',
            old_name='member_id',
            new_name='member',
        ),
    ]
