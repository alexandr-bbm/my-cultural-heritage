from django.db.models import Avg, Count
from rest_framework import viewsets, mixins

from heritage.models import HeritageObject, Rating
from heritage.serializers import HeritageObjectSerializer, RatingSerializer


class HeritageObjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeritageObject.objects.exclude(lat='').annotate(
        avg=Avg('rating__score'), count=Count('rating')).prefetch_related('photos', 'tagged_items__tag')
    serializer_class = HeritageObjectSerializer


class RatingViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Rating.objects.none()
    serializer_class = RatingSerializer
