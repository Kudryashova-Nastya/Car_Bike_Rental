# Generated by Django 3.1.4 on 2021-01-06 13:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Car', '0002_auto_20201227_0156'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='car_model_id',
            new_name='car_model_id_link',
        ),
    ]