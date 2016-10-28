from rest_framework import viewsets

from heritage.models import HeritageObject
from heritage.serializers import HeritageObjectSerializer


class HeritageObjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeritageObject.objects.exclude(lat='')
    serializer_class = HeritageObjectSerializer
