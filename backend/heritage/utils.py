import requests

from heritage.models import HeritageObject


def fill_objects():
    urls = [
        u'https://tomsk.gov.ru/opendata/7017069388-OKNR/data-20160616-structure-20160616.json',
        u'https://tomsk.gov.ru/opendata/7017069388-OKNF/data-20150525-structure-20150525.json'
    ]
    for url in urls:
        data = requests.get(url).json()
        for obj in data:
            HeritageObject.objects.create(
                name=obj[u'Наименование ОКН регионального значения (в соответствии с нормативным правовым актом органа государственной власти субъекта Российской Федерации о его постановке на государственную охрану)'],
                address_1=obj[u'Местонахождение ОКН регионального значения  (в соответствии с данными органов технической инвентаризации)'],
                address_2=obj[u'Местонахождение ОКН регионального значения  (в соответствии с нормативным правовым актом органа государственной власти субъекта Российской Федерации о его постановке на государственную охрану)'],
                act_name=obj[u'Наименование и реквизиты нормативно-правового акта органа государственной власти о постановке ОКН регионального значения на государственную охрану (включая наименование нормативного правового акта об уточнении пообъектного состава)']
            )

    geo = requests.get(
        'https://geocode-maps.yandex.ru/1.x/?format=json&geocode={}'.format(address)).json()
    geo['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['Point']['pos']
