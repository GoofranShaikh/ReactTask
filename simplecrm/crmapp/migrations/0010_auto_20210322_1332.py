# Generated by Django 3.1.7 on 2021-03-22 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crmapp', '0009_auto_20210322_1301'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='CreatedDate',
            field=models.DateTimeField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='ModifiedDate',
            field=models.DateTimeField(blank=True, max_length=50, null=True),
        ),
    ]
