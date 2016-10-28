from __future__ import unicode_literals

import random
import string

from django.db import models
from taggit.managers import TaggableManager


class HeritageObject(models.Model):
    name = models.TextField(blank=True)
    address_1 = models.TextField(blank=True)
    address_2 = models.TextField(blank=True)
    act_name = models.TextField(blank=True)
    lat = models.TextField(blank=True)
    lon = models.TextField(blank=True)
    description = models.TextField(blank=True)

    tags = TaggableManager()

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


def object_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<random>
    file_ext = filename.split('.')[-1]
    random_str = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(6))
    return 'object_{0}/{1}.{2}'.format(instance.object.id, random_str, file_ext)


class Photo(models.Model):
    object = models.ForeignKey(HeritageObject, related_name='photos')
    photo = models.ImageField(upload_to=object_directory_path)


class Rating(models.Model):
    object = models.ForeignKey(HeritageObject)
    score = models.IntegerField()
