from django.contrib import admin
from heritage.models import HeritageObject, Photo, Rating


class PhotoInline(admin.StackedInline):
    model = Photo


class HeritageObjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'address_1']
    list_filter = ['tags']
    search_fields = ['name', 'address_1', 'address_2']
    inlines = [PhotoInline]


admin.site.register(HeritageObject, HeritageObjectAdmin)
admin.site.register((Photo, Rating))
