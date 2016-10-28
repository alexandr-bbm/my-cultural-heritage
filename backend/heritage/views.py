from rest_framework import viewsets, mixins

from heritage.models import HeritageObject, Rating
from heritage.serializers import HeritageObjectSerializer, RatingSerializer


class HeritageObjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeritageObject.objects.exclude(lat='')
    serializer_class = HeritageObjectSerializer


class RatingViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Rating.objects.none()
    serializer_class = RatingSerializer
