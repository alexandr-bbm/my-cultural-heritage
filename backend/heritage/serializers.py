from rest_framework import serializers

from heritage.models import HeritageObject, Photo


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('photo__url',)


class HeritageObjectSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='name')
    coords = serializers.SerializerMethodField()
    address = serializers.CharField(source='address_1')
    photos = PhotoSerializer(many=True)

    class Meta:
        model = HeritageObject
        fields = ('id', 'title', 'coords', 'address', 'description', 'photos')

    def get_coords(self, obj):
        return [obj.lon, obj.lat]
