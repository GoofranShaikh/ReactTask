# Generated by Django 3.1.7 on 2021-03-13 03:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crmapp', '0003_auto_20210304_1333'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='CreatedDate',
        ),
        migrations.RemoveField(
            model_name='account',
            name='ModifiedDate',
        ),
    ]
