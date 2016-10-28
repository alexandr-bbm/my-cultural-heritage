from rest_framework import serializers

from heritage.models import HeritageObject, Rating


class HeritageObjectSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='name')
    coords = serializers.SerializerMethodField()
    address = serializers.CharField(source='address_1')
    photos = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()

    class Meta:
        model = HeritageObject
        fields = ('id', 'title', 'coords', 'address', 'description', 'photos', 'rating', 'tags')

    def get_coords(self, obj):
        return [obj.lon, obj.lat]

    def get_photos(self, obj):
        return [photo.photo.url for photo in obj.photos.all()]

    def get_tags(self, obj):
        return obj.tags.names()


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'
