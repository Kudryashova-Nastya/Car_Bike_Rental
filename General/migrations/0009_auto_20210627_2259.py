# Generated by Django 3.1.4 on 2021-06-27 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('General', '0008_auto_20210627_2258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='time',
            field=models.CharField(blank=True, max_length=16),
        ),
    ]
