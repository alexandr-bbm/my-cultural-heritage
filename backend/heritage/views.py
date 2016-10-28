from rest_framework import viewsets, mixins

from heritage.models import HeritageObject, Rating
from heritage.serializers import HeritageObjectSerializer, RatingSerializer


class HeritageObjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeritageObject.objects.exclude(lat='')
    serializer_class = HeritageObjectSerializer

    def get_queryset(self):
        queryset = HeritageObject.objects.exclude(lat='')
        tag = self.request.query_params.get('tag', None)
        if tag is not None:
            queryset = queryset.filter(tags__slug=tag)
        return queryset


class RatingViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Rating.objects.none()
    serializer_class = RatingSerializer
