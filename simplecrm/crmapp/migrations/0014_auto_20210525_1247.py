# Generated by Django 3.1.7 on 2021-05-25 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crmapp', '0013_auto_20210524_1904'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='Active',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
